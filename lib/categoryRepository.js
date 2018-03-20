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
				var attributes = {_id:0, id:1, name:1, description:1};
				db.collection('categories').find({id: productId}, attributes).limit(1).toArray(function(err, docs){
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
				var attributes = {_id:0, id:1, name:1, description:1};
				db.collection('categories').find({}, attributes).limit(limit).skip(skip).toArray(function(err, docs){
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
