'use strict';

var products = require('./products.json');
var jp = require('jsonpath');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var async = require('async');

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
    },
	getFromMongo: function (productId, callback) {
		var url = 'mongodb://localhost:27017/test';
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				db.collection('products').find({id: productId}, {_id:0}).limit(1).toArray(function(err, docs){
					db.close();
					if(err) {
						callback(err);
					} else {
						callback(null, docs);
					}
				  });
			}
		});
	}
};
