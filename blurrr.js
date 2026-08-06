/*************************************

Blurrr Video Editor Premium Unlock Script
(3 R's - Blurrr)

Author: Custom Script
Date: 2026-08-06

Supported App:
- Blurrr - Video Background Blur

Hostname: 
- applog.camera360.com
- h5-api.360in.com
- h5-api.camera360.com

*************************************/

var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    // Console log for debugging
    console.log("=== Blurrr Script Start ===");
    console.log("URL: " + url);
    console.log("Original Response: " + body);
    
    // Modify response based on your data
    obj.status = 200;
    obj.mechanism = "batchInQuantum";
    obj.num = 999;  // Unlimited usage
    obj.serviceCost = 0;  // Free
    
    // Premium unlock
    obj.vip = true;
    obj.premium = true;
    obj.isPremium = 1;
    obj.isVip = 1;
    obj.vipLevel = 999;
    obj.member_type = "premium";
    
    // Subscription info
    obj.subscription = {
        "active": true,
        "status": "active",
        "type": "yearly",
        "expiry": "2099-12-31T23:59:59Z",
        "expireTime": 4102444800000,
        "productId": "com.blurrr.premium.yearly",
        "autoRenew": true,
        "trial": false
    };
    
    // Unlock features
    obj.features = {
        "blur_effects": true,
        "premium_filters": true,
        "hd_export": true,
        "4k_export": true,
        "watermark_remove": true,
        "ads_remove": true,
        "all_tools": true,
        "unlimited_saves": true
    };
    
    // Remove restrictions
    obj.watermark = false;
    obj.showWatermark = false;
    obj.ads = false;
    obj.showAds = false;
    obj.limited = false;
    obj.restricted = false;
    
    // Add unlimited credits
    obj.credits = 99999;
    obj.tokens = 99999;
    
    body = JSON.stringify(obj);
    
    console.log("Modified Response: " + body);
    console.log("=== Blurrr Script End ===");
    
} catch(e) {
    console.log("Blurrr Script Error: " + e);
}

$done({body});
