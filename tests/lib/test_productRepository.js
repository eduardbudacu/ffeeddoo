'use strict';

var test = require('tape');
var productRepository = require('../../lib/productRepository.js');

test('product repository', function(t){
	t.test('can get all products', function(t){
		t.ok(productRepository.all(), 'list all products');
		t.end();
	});
	
	t.test('can get product by id', function(t){
		var product = productRepository.get('1baf678ece527e5eddaea8b27fcc2580');
		t.equal(product[0].id, '1baf678ece527e5eddaea8b27fcc2580');
		t.end();
	});
	
	t.test('result form mongo', function(t) {
		var callback = function(err, product) {
			t.ok(!err);
			t.equal('1baf678ece527e5eddaea8b27fcc2580', product[0].id);
			t.end();
		}
		productRepository.getFromMongo('1baf678ece527e5eddaea8b27fcc2580', callback);
	});
});