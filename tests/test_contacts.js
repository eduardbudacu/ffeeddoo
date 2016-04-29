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
        api: path.join(__dirname, './..\config\api.json'),
        handlers: path.join(__dirname, '..\handlers')
    }));

    
    t.test('test get /contacts', function (t) {
        
        var responseSchema = enjoi({
            'type': "array", 
            'items': {"$ref":"#/definitions/Contact"}
        }, {
                subSchemas: {
                    '#':  require(Path.join(__dirname, './..\config\api.json')) 
                }
        });
        

        request(app).get('//contacts')
        .end(function (err, res) {
            t.ok(!err, 'get /contacts no error.');
            t.strictEqual(res.statusCode, 200, 'get /contacts 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
