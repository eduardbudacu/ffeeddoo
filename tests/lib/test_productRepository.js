'use strict';

var test = require('tape');
var productRepository = require('../../lib/productRepository.js');

test('product repository', function(t) {	
	t.test('get one form mongo', function(t) {
		var callback = function(err, product) {
			t.ok(!err, 'should not return an error');
			t.equal('1baf678ece527e5eddaea8b27fcc2580', product[0].id);
			t.end();
		}
		productRepository.getFromMongo('1baf678ece527e5eddaea8b27fcc2580', callback);
	});
	
	t.test('get all from mongo', function(t){
		var callback = function(err, products) {
			t.ok(!err, 'should not return an error');
			t.notEqual(products.length, 0);
			t.end();
		}
		productRepository.getAllFromMongo(callback);
	});
});