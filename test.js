var syncWait = function(milliseconds) {
	var now = new Date().getTime();

	var stop = now + milliseconds;

	while(stop > new Date().getTime()) {
		console.log('waiting...');
	}

	console.log('done!');
};


console.log('1');
var myFunction = function(callback) {
	console.log('2');
	setTimeout(callback, 1);
	console.log('3');
	syncWait(1000);
};

myFunction(function() {
	console.log('4');
});
console.log('5');