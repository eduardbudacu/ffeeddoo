'use strict';

var MongoClient = require('mongodb').MongoClient;

var config = require('../config/db.json');

module.exports = {
	getFromMongo: function (productId, callback) {
		var url = config.mongodb;
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				var product_attributes = {_id:0, id:1, name:1, description:1, code:1, product_category_id:1, product_category_name:1, manufacturer_id:1, manufacturer_name:1, warranty:1};
				db.collection('products').find({id: productId}, product_attributes).limit(1).toArray(function(err, docs){
					db.close();
					if(err) {
						callback(err);
					} else {
						callback(null, docs);
					}
				  });
			}
		});
	},
	getAllFromMongo: function(query, callback) {
        var url = config.mongodb;
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				var limit = 100;
				var skip = 0;
				if(query.skip !== undefined) {
					skip = parseInt(query.skip);
				} 
				var product_attributes = {_id:0, id:1, name:1, description:1, code:1, product_category_id:1, product_category_name:1, manufacturer_id:1, manufacturer_name:1, warranty:1};
				db.collection('products').find({}, product_attributes).limit(limit).skip(skip).toArray(function(err, docs){
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
