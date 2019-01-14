const zlib = require('zlib')
const util = require('util')
zlib.deflate = util.promisify(zlib.deflate)
zlib.inflate = util.promisify(zlib.inflate)

async function compress(input = '') {
    return await zlib.deflate(input)
}

async function decompress(input = '') {
    return await zlib.inflate(input)
}

module.exports = {
    compress,
    decompress
}