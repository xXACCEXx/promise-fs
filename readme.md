# Promise FS

This package provides a promise based wrapper around the node fs package. Essentially, it curries the callback function, and provides a promise in its place.

Currently this only supports a few simple interfaces, listed bellow.

* mkdir
* mkdtemp
* lstat
* readdir
* readFile
* writeFile
* mkdtemp
* rename
* rmdir
* unlink
* remove

## Example

``` js
let { writeFile } = require('@acce/promise-fs')

writeFile('./some.txt', 'foo bar', 'utf8')

	.then(() => do.something())
	.catch(e => console.error('Oh snap.', e))
```

# Installing

```
npm i --save @acce/promise-fs
```

## Contributing

Feel free to add extra modules, I'll merge where useful. I'm kinda slack so maybe fork?...