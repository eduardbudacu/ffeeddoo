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

    
    t.test('test get /contacts/{id}', function (t) {
        
        var responseSchema = enjoi({
            'type': "array", 
            'items': {"$ref":"#/definitions/Contacts"}
        }, {
                subSchemas: {
                    '#':  require(Path.join(__dirname, './..\config\api.json')) 
                }
        });
        

        request(app).get('//contacts/1')
        .end(function (err, res) {
            t.ok(!err, 'get /contacts/{id} no error.');
            t.strictEqual(res.statusCode, 200, 'get /contacts/{id} 200 status.');
            responseSchema.validate(res.body, function (error) {
                t.ok(!error, 'Response schema valid.');
            });
            t.end();
        });
    });
    

});
