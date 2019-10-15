// Import dependencies
//const assert  = require('assert');
const { assert } = require('chai');
const CeeView = require('../index');

// Test begin

const ceeview = new CeeView('ceeview.example.com', '1337', true);
const service = ceeview.Service('PERCENT', 300, true);

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
            assert.isTrue(service.obj.errorOnMissing);
        });

        it('Should be array (data array)', () => {
            assert.isArray(service.obj.data)
        });

    });

    describe('Metric data', () => {

        const values = [1, 2, 3, 4, 8, 13];

        for(value of values) {
            service.Metric('MyService', 'MyElement', 'MyQualifier1', 10, 'LE', value, 5);
        }

        it('Should be array (data array)', () => {
            assert.isArray(service.obj.data)
        });

        it('Should have 6 records', () => {
            assert.lengthOf(service.obj.data, 6);
        });

        it('Should be object (inside data array)', () => {
            assert.isObject(service.obj.data[3]);
        })

        it('Should match operator property', () => {
            for(data of service.obj.data) {
                assert.equal(data.operator, 'LE');
            }
        });

        it('Should have correct warning operator', () => {
            for(value of values) {
                assert.equal(service.obj.data[values.indexOf(value)].warning.properties.operator, 'LE');
            }
        })

        it('Should have correct warning threshold', () => {
            for(value of values) {
                assert.equal(service.obj.data[values.indexOf(value)].warning.properties.threshold, 5);
            }
        })

        it('Should have correct values', () => {

            for(value of values) {
                assert.equal(service.obj.data[values.indexOf(value)].value, value);    
            }
        })
    });

});