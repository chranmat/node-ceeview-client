// Import sub classes
const Service  = require('./lib/Service');

class CeeView {
    constructor(host, apiToken, insecure=false) {
        this.host = host;
        this.apiToken = apiToken;
        this.insecure = insecure;
    }

    Service(unit, interval=60, errorOnMissing=false) {
        return new Service(this.host, this.apiToken, this.insecure, unit, interval, errorOnMissing);
    }
}

module.exports = CeeView;