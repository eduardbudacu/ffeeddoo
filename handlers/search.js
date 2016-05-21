'use strict';

/**
 * Operations on /search
 */
module.exports = {
    
    /**
     * 
     * parameters: name
     * produces: application/json, text/json
     */
    get: function product_searchFullText(req, res) {
        var name = req.params['name'];
		res.json(name);
    }
    
};
