'use strict';
/**
 * Operations on /categories
 */
var repository = require('../lib/categoryRepository');
module.exports = {
    /**
     * 
     * parameters: 
     * produces: application/json, text/json
     */
    get: function category_get(req, res) {
		var callback = function(err, products) {
			if(err) {
				res.sendStatus(500);
			}
			res.json(products);
		}
		repository.getAllFromMongo(req.query, callback);
    }
};