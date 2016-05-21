'use strict';

var test = require('tape'),
    path = require('path'),
    express = require('express'),
    jsYaml = require('js-yaml'),
    fs = require('fs'),
    enjoi = require('enjoi'),
    swaggerize = require('swaggerize-express'),
    request = require('supertest');

test('api', function (t) {
    var app = express();

    

    app.use(swaggerize({
        api: path.join(__dirname, './../config/api.json'),
        handlers: path.join(__dirname, '../handlers')
    }));

    
    t.test('test get /products/{id}', function (t) {
        
        var responseSchema = enjoi({
            'type': "array", 
            'items': {"$ref":"#/definitions/Product"}
        }, {
                subSchemas: {
                    '#':  require(path.join(__dirname, './../config/api.json')) 
                }
        });
        

        request(app).get('/products/1baf678ece527e5eddaea8b27fcc2580')
        .end(function (err, res) {
            t.ok(!err, 'get /products/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'get /products/{id} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
