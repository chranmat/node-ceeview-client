class ServiceMetric {
    constructor(service, element, qualifier, threshold, operator, value, warning) {
        this.service = service;
        this.element = element;
        this.qualifier = qualifier;
        this.threshold = threshold;
        this.operator = operator;

        if(warning) {
            this.warning = {
                properties: {
                    operator: operator,
                    threshold: warning
                }
            }
        }

        this.value = value;
    }

    get() {
        return this;
    }
}

module.exports = ServiceMetric;