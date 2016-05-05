# ffeeddoo

```json
{
  "swagger": "2.0",
  "info": {
    "version": "v1",
    "title": "FFEEDDOO",
    "description": "RESTful abstractisation for product catalog"
  },
  "host": "localhost",
  "schemes": [
    "http",
    "https"
  ],
  "basePath": "/",
  "paths": {
    "/contacts": {
      "get": {
        "tags": [
          "Contacts"
        ],
        "operationId": "contacts_get",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Contact"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/contacts/{id}": {
      "get": {
        "tags": [
          "Contacts"
        ],
        "operationId": "contacts_getById",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Contacts"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/products": {
      "get": {
        "tags": [
          "Products"
        ],
        "operationId": "products_get",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Product"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/product/{id}": {
      "get": {
        "tags": [
          "Products"
        ],
        "operationId": "product_getById",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Product"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/product/{id}/stock": {
      "get": {
        "tags": [
          "Products"
        ],
        "operationId": "product_getStockById",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ProductStock"
              }
            }
          }
        },
        "deprecated": false
      }
    },
    "/product/{id}/prices": {
      "get": {
        "tags": [
          "Products"
        ],
        "operationId": "product_getPricesById",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ProductPrice"
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "definitions": {
    "Contact": {
      "type": "object",
      "properties": {
        "id": {
          "format": "int32",
          "type": "integer"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      }
    },
    "Product": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "category_id": {
          "type": "string"
        },
        "category_name": {
          "type": "string"
        },
        "manufacturer_id": {
          "type": "string"
        },
        "manufacturer_name": {
          "type": "string"
        },
        "warranty": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "ProductStock": {
      "type": "object",
      "properties": {
        "product_id": {
          "type": "string"
        },
        "supplier_id": {
          "type": "string"
        },
        "supplier_name": {
          "type": "string"
        },
        "stock_value": {
          "type": "integer"
        },
        "reserved_stock_value": {
          "type": "integer"
        },
        "supplier_stock_value": {
          "type": "integer"
        },
        "supplier_stock_delivery_date": {
          "type": "integer"
        }
      }
    },
    "ProductPrice": {
      "type": "object",
      "properties": {
        "product_id": {
          "type": "string"
        },
        "supplier_id": {
          "type": "string"
        },
        "supplier_name": {
          "type": "string"
        },
        "price": {
          "type": "decimal"
        },
        "price_components": {
          "type": "array",
          "items": {
            "value": {
              "type": "decimal"
            },
            "type": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```
