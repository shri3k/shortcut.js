//keyCapture.js
var obj = {
	'super': [
		'x'
	],
	'p': function() {
		console.log('you pressed p');
	}
};

function addShortcut(ob) {
	state = false;
	var key = Object.keys(ob);
	document.onkeyup = function(e) {
		if (state && e.key in obj) {
			console.log(e.keyCode);
		}
		state = false;
	};
	document.onkeydown = function(e) {
		if (!state && ob['super'].indexOf(e.key) > -1) {
			state = true;
			console.log(e.keyCode + 'supaaa!!');
		}
	};
}
addShortcut(obj);