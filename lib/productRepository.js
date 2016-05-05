'use strict';

var products = require('./products.json');
var jp = require('jsonpath');

module.exports = {
    get: function (id) {
		var path = '$..[?(@.id==\'';
		path = path + id;
		path = path + '\')]';
		console.log(path);
        return jp.query(products['products'], path);
    },
    all: function () {
        return products['products'];
    }
};
