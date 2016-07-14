var assert = require('chai').assert;
var myLib = require('../index.js').myLib;

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

    it('should have a property called run that is a function', function() {
        assert.equal(typeof(myLib.run), 'function');
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

    describe('getBodyContent', function() {

        it('should be a function', function() {
            assert.equal(typeof(myLib.getBodyContent), 'function');
        });

        it('should get the HTML of a URL and only return the contents of the <body> tag', function(done) {

            var firstCB = function(bodyContent) {
                assert.equal('Hello World', bodyContent);
                done();
            };

            myLib.getBodyContent('https://www.google.com/', firstCB);
        });
    });

    describe('getFileContent', function() {

        it('should be a function', function() {
            assert.equal(typeof(myLib.getFileContent), 'function');
        });

        it('should get the contents of a file and return it', function(done) {

            myLib.getFileContent('testFile.txt', function(content) {
                assert.equal('Hello World!', content);
                done();
            });
        });
    });

    describe('fib', function() {

        it('should return the fibonacci number for the provided number', function() {
            assert.equal(1, myLib.fib(1));
            assert.equal(1, myLib.fib(2));
            assert.equal(2, myLib.fib(3));
            assert.equal(3, myLib.fib(4));
            assert.equal(5, myLib.fib(5));
            assert.equal(8, myLib.fib(6));
            assert.equal(610, myLib.fib(15));

        });
    });
});