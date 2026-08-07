/*************************************

Blurrr Video Editor Premium Unlock
By: explicit7x
GitHub: https://github.com/explicit7x/shadowrocket-scripts
Date: 2026-08-07

Supported:
- Blurrr App (iOS)
- API: video-beats-api.360in.com

*************************************/

var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    console.log("=== Blurrr Premium Unlock ===");
    console.log("URL: " + url);
    
    if (obj.blurrrVersion) {
        var config = JSON.parse(obj.blurrrVersion);
        
        // Disable all paywalls
        if (config.payWalls) {
            config.payWalls.isOpen = 0;
            
            // Global settings
            if (config.payWalls.global) {
                if (config.payWalls.global.launch) {
                    config.payWalls.global.launch.isOpen = 0;
                }
                if (config.payWalls.global.createProject) {
                    config.payWalls.global.createProject.isOpen = 0;
                }
            }
            
            // CN region settings
            if (config.payWalls.local && config.payWalls.local.CN) {
                if (config.payWalls.local.CN.launch) {
                    config.payWalls.local.CN.launch.isOpen = 0;
                }
                if (config.payWalls.local.CN.createProject) {
                    config.payWalls.local.CN.createProject.isOpen = 0;
                }
            }
        }
        
        // Disable premium promotions
        if (config.salesPromotionConfig) {
            config.salesPromotionConfig.monthlySVIPIsOpen = false;
        }
        
        obj.blurrrVersion = JSON.stringify(config);
    }
    
    body = JSON.stringify(obj);
    console.log("=== Unlock Complete ===");
    
} catch(e) {
    console.log("Error: " + e);
}

$done({body});
