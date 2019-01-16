const zlib = require('zlib')
const util = require('util')
zlib.deflate = util.promisify(zlib.deflate)
zlib.inflate = util.promisify(zlib.inflate)

function compress(input = '', compression) {
    const compOptions = {
        level: compression ? zlib.constants.Z_BEST_COMPRESSION : zlib.constants.Z_BEST_SPEED
    }

    return zlib.deflate(input, compOptions)
}

function decompress(input = '') {
    return zlib.inflate(input)
}

module.exports = {
    compress,
    decompress
}