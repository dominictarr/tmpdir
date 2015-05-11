var assert = require('assert')
var tmpdir = require('./')


assert(typeof tmpdir === 'function')
var path = tmpdir()
assert(typeof path === 'string')
assert(path)

console.log(path)
