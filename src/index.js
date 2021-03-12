
exports.min = function min(array) {
	return typeof array !== 'undefined' && array.length > 0 ? array.sort((a, b) => a - b).reverse().pop() : 0;
}

exports.max = function max(array) {
	return typeof array !== 'undefined' && array.length > 0 ? array.sort((a, b) => a - b).pop() : 0;
}

exports.avg = function avg(array) {
	return typeof array !== 'undefined' && array.length > 0 ? array.reduce((a, b) => (a + b)) / array.length : 0;
}
