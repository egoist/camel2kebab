# camel2kebab [![Build Status](https://travis-ci.org/egoist/camel2kebab.svg?branch=master)](https://travis-ci.org/egoist/camel2kebab)

> camelCase/PascalCase to kebab-case

## Install

```
$ npm install --save camel2kebab
```

## Usage

```js
const camel2kebab = require('camel2kebab');

camel2kebab('fontSize');
//=> 'font-size'
// if it's either camelCase or PascalCase
// we just return lowercased string
```

## API

### camel2kebab(input, toLowerCase)

#### input

Type: `string`

Input camelCased string

#### toLowerCase

**true** by default

Covert the whole input string to lowercase

## License

MIT © [EGOIST](https://github.com/egoist)
