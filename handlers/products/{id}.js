'use strict';
/**
 * Operations on /product/{id}
 */
 
var repository = require('../../lib/productRepository');
 
module.exports = {
    /**
     * 
     * parameters: id
     * produces: application/json, text/json
     */
    get: function product_getById(req, res) {
        res.json(repository.get(req.params['id']));
    }
};