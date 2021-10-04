const makeTableMap = require('makeTableMap');
const setResponseHeader = require('setResponseHeader');
const setResponseBody = require('setResponseBody');
const JSON = require('JSON');

setResponseHeader('Content-Type', 'application/json');
setResponseBody(JSON.stringify(createObject()));
data.gtmOnSuccess();


function createObject() {
    if (!data.object_data) {
        if (data.inside_array) {
            return [{}];
        }

        return {};
    }

    let object = data.simple_object ? createSimpleObject() : createNestedObject();

    if (data.inside_array) {
        return [object];
    }

    return object;
}

function createSimpleObject() {
    return makeTableMap(data.object_data, 'property', 'value');
}

function createNestedObject() {
    let object = {};

    for (let key in data.object_data) {
        let dotPath = data.object_data[key].property;
        let rootProperty = dotPath.split('.')[0];

        object[rootProperty] = strToObj(dotPath, data.object_data[key].value)[rootProperty];
    }

    return object;
}

function strToObj(dotPath, val) {
    let i, obj = {}, dotArr = dotPath.split('.');
    let x = obj;

    for (i = 0; i < dotArr.length - 1; i++) {
        x = x[dotArr[i]] = {};
    }

    x[dotArr[i]] = val;

    return obj;
}
