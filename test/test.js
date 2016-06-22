var assert = require('chai').assert;
var myLib = require('../index.js');

describe('MyLib', function() {
    it('should be an object', function () {
    	assert.equal(typeof(myLib), 'object');
    });

    it('should have a property called assert that is an object', function() {
    	assert.equal(typeof(myLib.assert), 'object');
    });

    it('should have a property called test that is an object', function() {
    	assert.equal(typeof(myLib.test), 'object');
    });

    describe('assert', function() {
    	it('should have a property called equal that is a function', function() {
    		assert.equal(typeof(myLib.assert.equal), 'function');
    	});

    	describe('equal', function() {
    		it('should take two parameters and return whether they are equal or not', function() {
    			assert.equal(true, myLib.assert.equal(5, 5));
    		});

    		it('should take two parameters and return whether they are exactly equal or not', function() {
    			assert.equal(false, myLib.assert.equal(5, '5'));
    		});
    	});
    });
});