let response = {
  "status": 200,
  "mechanism": "batchInQuantum",
  "num": 999,
  "serviceCost": 0,
  "vip": true,
  "premium": true,
  "isPremium": 1,
  "subscription": {
    "active": true,
    "expiry": "2099-12-31T23:59:59Z"
  }
};

$done({ body: JSON.stringify(response) });
