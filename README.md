<div align="center">
	<img src="assets/compress.jpg" alt="Compression" height="300px">
</div>

# teeny-tiny

[![Package version](https://img.shields.io/npm/v/react-native-side-drawer.svg?style=flat-square)](https://npmjs.org/package/teeny-tiny)
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

Compress a simple string, returns a promise:

```javascript
const INPUT_STRING = "Hello World"

compress(INPUT_STRING).then(res => {
    console.log(`[LOG]: ${res}`)    // should print: x��p�����q�
}).catch(err => {
    console.log(`[ERR]: ${err}`)
})
```

Decompress a simple string, returns a promise:

```javascript
const INPUT_STRING = "x��p�����q�"

decompress(INPUT_STRING).then(res => {
    console.log(`[LOG]: ${res.toString()}`) // should print: Hello World
}).catch(err => {
    console.log(`[ERR]: ${err}`)
})
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