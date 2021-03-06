<div align="center">
	<img src="assets/compress.jpg" alt="Compression" height="300px">
</div>

# teeny-tiny

[![Package version](https://img.shields.io/npm/v/teeny-tiny.svg?style=flat-square)](https://npmjs.org/package/teeny-tiny)
[![Make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/npm/l/teeny-tiny.svg?style=flat-square)](https://github.com/pedreviljoen/teeny-tiny/blob/master/LICENSE) 
[![npm downloads](https://img.shields.io/npm/dm/teeny-tiny.svg?style=flat-square)](https://npmjs.org/package/teeny-tiny)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/pedreviljoen/teeny-tiny.svg)](https://greenkeeper.io/)

> Simple compression and decompression

## Contents

- [teeny-tiny](#teeny-tiny)
  - [Contents](#contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)

## Install

```sh
yarn add teeny-tiny
```

OR

```sh
npm install teeny-tiny
```

## Usage

Require the compress & decompress functions from the module 

```javascript
const { compress, decompress } = require('teeny-tiny')
```

Compress or Decompress, returns a promise:

```javascript
async function start (){
    const opts = true                           // will compress with best compression
                                                // if false with best speed

    const compressResult = await compress('Hello World', opts)
    console.log(`[LOG]: ${compressResult}`)     // prints: [LOG]: x��H����/�I

    const decompressResult = await decompress(compressResult)
    console.log(`[LOG]: ${decompressResult}`)   // prints: [LOG]: Hello World
}

start()
```

## Contribute

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/pedreviljoen/teeny-tiny/issues).

## License

MIT