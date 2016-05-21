'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = {
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
	},
	getAllFromMongo: function(callback) {
        var url = 'mongodb://localhost:27017/test';
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				db.collection('products').find({}, {_id:0}).toArray(function(err, docs){
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
