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
        res.json(repository.all());
    }
};