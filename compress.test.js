const { compress, decompress } = require('./index')

test('Compress test of Hello World', done => {
    compress('Hello World').then(res => {
        expect(res.toString().split()).toEqual(['x��H���W\b�/�I\u0001\u0000\u0018\u000b\u0004\u001d'])
        done()
    })
})

test('Decompress test of Hello World', done => {
    compress('Hello World').then(res => {
        decompress(res).then(result => {
            expect(result.toString()).toEqual("Hello World")
            done()
        })
    })
})