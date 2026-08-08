// Blurrr Premium Unlock Script
// Check if response body exists
var body = $response.body;
var objc;

// If body exists, parse it, otherwise create new object
if (body) {
    try {
        objc = JSON.parse(body);
    } catch (e) {
        objc = {};
    }
} else {
    objc = {};
}

// Premium unlock response
objc = {
  "blurrVersion": "1",
  "appVersion": "2.3.57",
  "payWalls": "isOpen",
  "global": {
    "launch": "isOpen",
    "interval": "createProject",
    "entrance": "Vedkey"
  },
  "isOpen": true,
  "createProject": true,
  "interval": true,
  "monthlySVIPisOpen": true,
  "config": {
    "isSlience": false,
    "prerenderThreshold": 999,
    "userTagPerCountLimit": 99999
  },
  "pre": "premium",
  "svipProductCloudSpaceConfig": {
    "items": [
      {
        "productId": "com.pinguo.imgApps.About_year",
        "size": "999G"
      },
      {
        "productId": "About_year_88",
        "size": "999G"
      },
      {
        "productId": "com.pinguo.imgApps.About_Forever",
        "size": "999G"
      },
      {
        "productId": "yearly_membership_pkg2",
        "size": "999G"
      },
      {
        "productId": "lifetime_membership_pkg1",
        "size": "999G"
      },
      {
        "productId": "yearly_membership_pkg4",
        "size": "999G"
      },
      {
        "productId": "About_year_88_1Day",
        "size": "999G"
      }
    ]
  },
  "userInfo": {
    "isPremium": true,
    "isVIP": true,
    "isSVIP": true,
    "subscriptionStatus": "active",
    "expiryDate": "2099-12-31T23:59:59Z"
  }
};

$done({ body: JSON.stringify(objc) });
