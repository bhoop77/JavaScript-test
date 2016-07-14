var fs = require('fs');

module.exports = {
	getHTML: function(url, callback) {

		setTimeout(function() {
			callback('<html><body>Hello World</body></html>');
		}, 10);
	},

	getFile: function(filename, callback) {

		fs.readFile( __dirname + '/' + filename, function (err, data) {
		  if (err) {
		    throw err; 
		  }
		  callback(data.toString());
		});
	}
};