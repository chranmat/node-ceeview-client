# About
[CeeView](https://www.ceeview.com) is a IT Service Monitoring & Management used by many companies to monitor the state of their applications and services.

Ceeview monitors, measures and analyzes all aspects of an IT Service to ensure high service availability.
It will help you understand users’ experience as well as service and infrastructure behavior.

**This software** (node-ceeview-client) is a Node.js SDK (wrapper) for the CeeView API. This software is unofficial and unsupported, but published with permissions from CeeSoft AS.

**This software** is currently in beta version (0.0.1) and does only implement the Service creation/update class.

# Requirements
**This software** is tested on the latest LTS version of Node.js (10.16.3).

# Getting started

Install with NPM
```
npm i ceeview-client
```

Example usage:
```javascript
// Import library
const CeeView = require('ceeview-client');

// Instantiate class (define server settings)
const ceeview = new CeeView('ceeview.example.com', '1234-1234-1234-1234');

// Define the service request properties (threshold, operator, unit)
const service = ceeview.Service(2, 'LE', 'VALUE');

// Add metrics for different services (service, element, qualifier, value)
service.Metric('ServiceA', 'ElementA', 'QualifierA', 1);
service.Metric('ServiceA', 'ElementB', 'QualifierB', 2);

// Send the request to the CeeView API
service.Send().then(function(response) {
    console.log(response);
})

```
