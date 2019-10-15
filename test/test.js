// Import dependencies
//const assert  = require('assert');
const { assert } = require('chai');
const CeeView = require('../index');

// Test begin

const ceeview = new CeeView('ceeview.example.com', '1337', true);
const service = ceeview.Service(2, 'LE', 'PERCENT', 300);

describe('Class tests', () => {

    describe('CeeView class', () => {

        it('Should return object', () => {
            assert.isObject(ceeview);
        });

        it('Should match host property', () => {
            assert.equal(ceeview.host, 'ceeview.example.com');
        });

        it('Should match apiToken property', () => {
            assert.equal(ceeview.apiToken, '1337');
        });

        it('Should be bool (insecure prop)', () => {
            assert.isBoolean(ceeview.insecure);
        });

        it('Should be true (insecure prop)', () => {
            assert.isTrue(ceeview.insecure);
        });
    });

    describe('Service class', () => {

        it('Should return object', () => {
            assert.isObject(service);
        });

        it('Should match host property', () => {
            assert.equal(service.host, 'ceeview.example.com');
        });

        it('Should be bool (insecure prop)', () => {
            assert.isBoolean(service.insecure);
        });

        it('Should be true (insecure prop)', () => {
            assert.isTrue(service.insecure);
        });

        it('Should match apiToken property', () => {
            assert.equal(service.obj.apiToken, '1337');
        });

        it('Should match operator property', () => {
            assert.equal(service.obj.operator, 'LE');
        });

        it('Should match unit property', () => {
            assert.equal(service.obj.unit, 'PERCENT');
        });

        it('Should match interval property', () => {
            assert.equal(service.obj.interval, 300);
        });

        it('Should be bool (errorOnMissing prop)', () => {
            assert.isBoolean(service.obj.errorOnMissing);
        });

        it('Should be true (errorOnMissing prop)', () => {
            assert.isFalse(service.obj.errorOnMissing);
        });

        it('Should be array (data array)', () => {
            assert.isArray(service.obj.data)
        });

    });

    describe('Metric data', () => {

        service.Metric('MyService', 'MyElement', 'MyQualifier1', 1);
        service.Metric('MyService', 'MyElement', 'MyQualifier2', 2);
        service.Metric('MyService', 'MyElement', 'MyQualifier3', 3);
        service.Metric('MyService', 'MyElement', 'MyQualifier4', 5);
        service.Metric('MyService', 'MyElement', 'MyQualifier5', 8);
        service.Metric('MyService', 'MyElement', 'MyQualifier6', 13);

        it('Should be array (data array)', () => {
            assert.isArray(service.obj.data)
        });

        it('Should have 6 records', () => {
            assert.lengthOf(service.obj.data, 6);
        });

        it('Should be object (inside data array)', () => {
            assert.isObject(service.obj.data[3]);
        })

        it('Should have correct values', () => {
            assert.equal(service.obj.data[0].value, 1);
            assert.equal(service.obj.data[1].value, 2);
            assert.equal(service.obj.data[2].value, 3);
            assert.equal(service.obj.data[3].value, 5);
            assert.equal(service.obj.data[4].value, 8);
            assert.equal(service.obj.data[5].value, 13);
        })
    });

});