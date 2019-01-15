const zlib = require('zlib')
const util = require('util')
zlib.deflate = util.promisify(zlib.deflate)
zlib.inflate = util.promisify(zlib.inflate)

function compress(input = '') {
    return zlib.deflate(input)
}

function decompress(input = '') {
    return zlib.inflate(input)
}

module.exports = {
    compress,
    decompress
}