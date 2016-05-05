'use strict';

function ProductPrice(options) {
    if (!options) {
        options = {};
    }
    
    this.product_id = options.product_id;
    this.supplier_id = options.supplier_id;
    this.supplier_name = options.supplier_name;
    this.price = options.price;
    this.price_components = options.price_components;
}

module.exports = ProductPrice;
