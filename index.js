var fs = require('fs');
var util = require('util');

var promisifyable = [
	'mkdir',
	'lstat',
	'readdir',
	'readFile',
	'mkdtemp',
	'rename',
	'rmdir'
];

var pfs = {};

promisifyable.forEach(fn => {
	pfs[fn] = util.promisify(fs[fn]);
})

module.exports = util._extend(pfs, fs);
console.log(module.exports);

if (!module.parent) {
	var args = process.argv.slice(2);
	console.log('args', args);
	pfs[args[0]].apply(null, args.slice(1));
}