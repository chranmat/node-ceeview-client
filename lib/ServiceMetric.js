class ServiceMetric {
    constructor(service, element, qualifier, value) {
        this.service = service;
        this.element = element;
        this.qualifier = qualifier;
        this.value = value;
    }

    get() {
        return {
            service: this.service,
            element: this.element,
            qualifier: this.qualifier,
            value: this.value,
        }
    }
}

module.exports = ServiceMetric;