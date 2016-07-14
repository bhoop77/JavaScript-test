var helper = require('./helper');

module.exports = {
	assert:{ 
		equal: function(a,b){
			return a === b;
		}

	},
	test:{

	},
	run: function(){

	},

	getBodyContent: function(url, callback) {

		var secondCB = function(html) {

			var bodyContent = html.substring(html.indexOf('<body>')+6, html.indexOf('</body>'));

			callback(bodyContent);
		};

		helper.getHTML(url, secondCB);
	},

	getFileContent: function(filename,callback){

		helper.getFile(filename, function(data){
			callback(data);
		});
	},

	fib: function(num) {

		if(num <= 2) return 1;

		return this.fib(num-1) + this.fib(num-2);
	}
};