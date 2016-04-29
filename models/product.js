'use strict';

function Product(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.code = options.code;
    this.category_id = options.category_id;
    this.category_name = options.category_name;
    this.manufacturer_id = options.manufacturer_id;
    this.manufacturer_name = options.manufacturer_name;
    this.warranty = options.warranty;
}

module.exports = Product;
