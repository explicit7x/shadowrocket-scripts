var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    if (obj.blurrrVersion) {
        var config = JSON.parse(obj.blurrrVersion);
        
        if (config.payWalls) {
            config.payWalls.isOpen = 0;
            
            if (config.payWalls.global) {
                if (config.payWalls.global.launch) {
                    config.payWalls.global.launch.isOpen = 0;
                }
                if (config.payWalls.global.createProject) {
                    config.payWalls.global.createProject.isOpen = 0;
                }
            }
            
            if (config.payWalls.local && config.payWalls.local.CN) {
                if (config.payWalls.local.CN.launch) {
                    config.payWalls.local.CN.launch.isOpen = 0;
                }
                if (config.payWalls.local.CN.createProject) {
                    config.payWalls.local.CN.createProject.isOpen = 0;
                }
            }
        }
        
        if (config.salesPromotionConfig) {
            config.salesPromotionConfig.monthlySVIPIsOpen = false;
        }
        
        obj.blurrrVersion = JSON.stringify(config);
    }
    
    body = JSON.stringify(obj);
    
} catch(e) {
    console.log("Error: " + e);
}

$done({body});
