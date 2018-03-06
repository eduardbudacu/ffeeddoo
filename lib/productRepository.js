'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = {
	getFromMongo: function (productId, callback) {
		var url = 'mongodb://ffeeddoo:3yLIArVdMxZX2R6ax0SfaoLVuA1iyPM1Ys3om9YcpySMyfLvFfqEONoHft7pfnvxibcZSegBOaBR4BiqzVpwkA==@ffeeddoo.documents.azure.com:10255/test?ssl=true';
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
	getAllFromMongo: function(callback) {
        var url = 'mongodb://ffeeddoo:3yLIArVdMxZX2R6ax0SfaoLVuA1iyPM1Ys3om9YcpySMyfLvFfqEONoHft7pfnvxibcZSegBOaBR4BiqzVpwkA==@ffeeddoo.documents.azure.com:10255/test?ssl=true';
		MongoClient.connect(url, function(err, db) {
			if(err) {
				callback(err);
			} else {
				var product_attributes = {_id:0, id:1, name:1, description:1, code:1, product_category_id:1, product_category_name:1, manufacturer_id:1, manufacturer_name:1, warranty:1};
				db.collection('products').find({}, product_attributes).toArray(function(err, docs){
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
