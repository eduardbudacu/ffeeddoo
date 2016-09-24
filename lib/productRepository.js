'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = {
	getFromMongo: function (productId, callback) {
		var url = 'mongodb://localhost:27017/test';
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				db.collection('products_nod').find({id: productId}, {_id:0, id:1, name:1, description:1, code:1, product_category_id:1, product_category_name:1, manufacturer_id:1, manufacturer_name:1, warranty:1}).limit(1).toArray(function(err, docs){
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
	getAllFromMongo: function(callback) {
        var url = 'mongodb://localhost:27017/test';
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				db.collection('products_nod').find({}, {_id:0, id:1, name:1, description:1, code:1, product_category_id:1, product_category_name:1, manufacturer_id:1, manufacturer_name:1, warranty:1}).toArray(function(err, docs){
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
