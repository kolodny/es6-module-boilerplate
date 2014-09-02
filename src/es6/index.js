var gen = function *() {
	yield 1;
	yield 2;
	yield 3;
}();

for (var i of gen) {
	console.log(i);
}