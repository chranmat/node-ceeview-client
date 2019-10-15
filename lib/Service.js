// Import classes
const ServiceMetric = require('./ServiceMetric');
const API = require('./API');

// Constants
const URL = '/api/v1/dataintegration/service';

// The service class
class Service {
    constructor(host, apiToken, insecure, threshold, operator, unit, interval=60, errorOnMissing) {
        this.host = host;
        this.insecure = insecure;

        this.obj = {
            apiToken: apiToken,
            threshold: threshold,
            operator: operator,
            unit: unit,
            interval: interval,
            errorOnMissing: errorOnMissing,
            data: []
        }
    }

    Metric(service, element, qualifier, value) {
        const metric = new ServiceMetric(service, element, qualifier, value)
        this.obj.data.push(metric);

        return metric;
    }

    Send() {

        return new Promise((resolve, reject) => {

            try {
                const api    = new API(this.host, this.insecure);
                const result = api.post(URL, this.obj);

                resolve(result);
            }
            catch(e) {
                reject(e);
            }
        } ) 
    }
}

module.exports = Service;