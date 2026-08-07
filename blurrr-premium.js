/*************************************

Blurrr Video Editor Premium Unlock Script
API: video-beats-api.360in.com
App: com.pinguo.msgAries (Aries/Blurrr)
Version: iOS 2.3.57+

GitHub: https://github.com/explicit7x/shadowrocket-scripts
Date: 2026-08-07

Supported Endpoints:
- video-beats-api.360in.com/v1/multi-json-config-show

[MITM]
hostname = video-beats-api.360in.com

[Script]
blurrr_premium = type=http-response,pattern=^https?:\/\/video-beats-api\.360in\.com\/v1\/multi-json-config-show,requires-body=1,max-size=0,script-path=blurrr-premium.js

*************************************/

var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    console.log("=== Blurrr Premium Unlock Start ===");
    console.log("URL: " + url);
    console.log("Original Response: " + body);
    
    // Parse nested JSON strings
    if (obj.blurrrVersion) {
        var blurrrConfig = JSON.parse(obj.blurrrVersion);
        
        // Disable paywalls - Make all features free
        if (blurrrConfig.payWalls) {
            blurrrConfig.payWalls.isOpen = 0;  // 0 = closed (no paywall)
            
            // Global settings
            if (blurrrConfig.payWalls.global) {
                if (blurrrConfig.payWalls.global.launch) {
                    blurrrConfig.payWalls.global.launch.isOpen = 0;
                }
                if (blurrrConfig.payWalls.global.createProject) {
                    blurrrConfig.payWalls.global.createProject.isOpen = 0;
                }
            }
            
            // Local settings (CN region)
            if (blurrrConfig.payWalls.local && blurrrConfig.payWalls.local.CN) {
                if (blurrrConfig.payWalls.local.CN.launch) {
                    blurrrConfig.payWalls.local.CN.launch.isOpen = 0;
                }
                if (blurrrConfig.payWalls.local.CN.createProject) {
                    blurrrConfig.payWalls.local.CN.createProject.isOpen = 0;
                }
            }
        }
        
        // Disable premium promotion
        if (blurrrConfig.salesPromotionConfig) {
            blurrrConfig.salesPromotionConfig.monthlySVIPIsOpen = false;
        }
        
        // Convert back to string
        obj.blurrrVersion = JSON.stringify(blurrrConfig);
    }
    
    // Parse config
    if (obj.config) {
        var configData = JSON.parse(obj.config);
        configData.isSilence = true;  // Silence premium prompts
        obj.config = JSON.stringify(configData);
    }
    
    // VIP Product config - unlock all cloud storage
    if (obj.vipProductICloudSpaceConfig) {
        var vipConfig = JSON.parse(obj.vipProductICloudSpaceConfig);
        if (vipConfig.items && Array.isArray(vipConfig.items)) {
            // Upgrade all storage to maximum
            vipConfig.items = vipConfig.items.map(function(item) {
                item.size = "999G";  // Unlimited storage
                return item;
            });
        }
        obj.vipProductICloudSpaceConfig = JSON.stringify(vipConfig);
    }
    
    // Add premium flags
    obj.isPremium = true;
    obj.vipLevel = 999;
    obj.subscription = {
        "active": true,
        "type": "lifetime",
        "expiry": "2099-12-31T23:59:59Z"
    };
    
    body = JSON.stringify(obj);
    
    console.log("Modified Response: " + body);
    console.log("=== Blurrr Premium Unlock End ===");
    
} catch(e) {
    console.log("Blurrr Script Error: " + e);
}

$done({body});
