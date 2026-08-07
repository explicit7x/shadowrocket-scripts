/*************************************

Blurrr Video Editor Premium Unlock Script
API: video-beats-api.360in.com
GitHub: https://github.com/explicit7x/shadowrocket-scripts
Date: 2026-08-07

*************************************/

var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    console.log("=== Blurrr Unlock Start ===");
    console.log("URL: " + url);
    
    // Modify payWalls config
    if (obj.blurrrVersion) {
        var blurrrConfig = JSON.parse(obj.blurrrVersion);
        
        // Disable paywalls
        if (blurrrConfig.payWalls) {
            blurrrConfig.payWalls.isOpen = 0;
            
            if (blurrrConfig.payWalls.global) {
                if (blurrrConfig.payWalls.global.launch) {
                    blurrrConfig.payWalls.global.launch.isOpen = 0;
                }
                if (blurrrConfig.payWalls.global.createProject) {
                    blurrrConfig.payWalls.global.createProject.isOpen = 0;
                }
            }
            
            if (blurrrConfig.payWalls.local && blurrrConfig.payWalls.local.CN) {
                if (blurrrConfig.payWalls.local.CN.launch) {
                    blurrrConfig.payWalls.local.CN.launch.isOpen = 0;
                }
                if (blurrrConfig.payWalls.local.CN.createProject) {
                    blurrrConfig.payWalls.local.CN.createProject.isOpen = 0;
                }
            }
        }
        
        // Disable promotions
        if (blurrrConfig.salesPromotionConfig) {
            blurrrConfig.salesPromotionConfig.monthlySVIPIsOpen = false;
        }
        
        obj.blurrrVersion = JSON.stringify(blurrrConfig);
    }
    
    body = JSON.stringify(obj);
    
    console.log("=== Blurrr Unlock End ===");
    
} catch(e) {
    console.log("Error: " + e);
}

$done({body});
