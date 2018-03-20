'use strict';
/**
 * Operations on /products
 */
var repository = require('../lib/productRepository');
module.exports = {
    /**
     * 
     * parameters: 
     * produces: application/json, text/json
     */
    get: function products_get(req, res) {
		var callback = function(err, products) {
			if(err) {
				res.sendStatus(500);
			}
			res.json(products);
		}
		repository.getAllFromMongo(req.query, callback);
    }
};