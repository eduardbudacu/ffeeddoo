'use strict';

function ProductStock(options) {
    if (!options) {
        options = {};
    }
    
    this.product_id = options.product_id;
    this.supplier_id = options.supplier_id;
    this.supplier_name = options.supplier_name;
    this.stock_value = options.stock_value;
    this.reserved_stock_value = options.reserved_stock_value;
    this.supplier_stock_value = options.supplier_stock_value;
    this.supplier_stock_delivery_date = options.supplier_stock_delivery_date;
}

module.exports = ProductStock;
