'use strict';

var products = require('./products.json');
var jp = require('jsonpath');

module.exports = {
    get: function (id) {
		var path = '$..[?(@.id==\'';
		path = path + id;
		path = path + '\')]';
        return jp.query(products['products'], path);
    },
	getStock: function(id) {
		
	},
	getPrices: function(id) {
		
	},
    all: function () {
        return products['products'];
    }
};
