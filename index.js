var fs = require('fs');
var util = require('util');

var promisifyable = [
	'mkdir',
	'mkdtemp',
	'lstat',
	'readdir',
	'readFile',
	'writeFile',
	'mkdtemp',
	'rename',
	'rmdir',
	'unlink'
];

var pfs = {};

promisifyable.forEach(fn => {
	pfs[fn] = util.promisify(fs[fn]);
})

module.exports = pfs;

if (!module.parent) {
	console.log('supported modules', pfs);
}