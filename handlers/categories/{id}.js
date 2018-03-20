'use strict';
/**
 * Operations on /cateogries/{id}
 */
var repository = require('../../lib/categoryRepository');
module.exports = {
    /**
     * 
     * parameters: id
     * produces: application/json, text/json
     */
    get: function product_getById(req, res) {
		var callback = function(err, data) {
			if(err) {
				res.sendStatus(404);
			} else {
				res.json(data);
			}
		}
		repository.getFromMongo(req.params['id'], callback); 
    }
};