// Import sub classes
const Service  = require('./lib/Service');

class CeeView {
    constructor(host, apiToken, insecure=false) {
        this.host = host;
        this.apiToken = apiToken;
        this.insecure = insecure;
    }

    Service(threshold, operator, unit, errorOnMissing=false) {
        return new Service(this.host, this.apiToken, this.insecure, threshold, operator, unit, errorOnMissing);
    }
}

module.exports = CeeView;