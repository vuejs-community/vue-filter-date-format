# vue-filter-date-format
Simple datetime filter for Vue.js

[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![NPM Version](https://img.shields.io/npm/v/vue-filter-date-format.svg)](https://www.npmjs.com/package/vue-filter-date-format)
[![Dependencies](https://david-dm.org/eduardnikolenko/vue-filter-date-format.svg)](https://david-dm.org/eduardnikolenko/vue-filter-date-format)
[![Dev Dependencies](https://david-dm.org/eduardnikolenko/vue-filter-date-format/dev-status.svg)](https://david-dm.org/eduardnikolenko/vue-filter-date-format/?type=dev)
[![Peer Dependencies](https://david-dm.org/eduardnikolenko/vue-filter-date-format/peer-status.svg)](https://david-dm.org/eduardnikolenko/vue-filter-date-format?type=peer)

## Installation

install from npm
```bash
$ npm install vue-filter-date-format
```
and register in you Vue app
```js
import Vue from 'vue'
import VueFilterDateFormat from 'vue-filter-date-format'

Vue.use(VueFilterDateFormat)
```

## Usage

```html
<template>
  <div>{{ new Date() | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

## Format Options

|            | Key    | Output                  |
| ---------- | ------ | ----------------------- |
| **Year**   | `YYYY` | 1970 1971 ... 2029 2030 |
|            | `YY`   | 70 71 ... 29 30         |
| **Month**  | `MM`   | 01 02 ... 11 12         |
|            | `M`    | 1 2 ... 11 12           |
| **Day**    | `DD`   | 01 02 ... 30 31         |
|            | `D`    | 1 2 ... 30 31           |
| **Hour**   | `HH`   | 00 01 ... 22 23         |
|            | `H`    | 0 1 ... 22 23           |
|            | `hh`   | 01 02 ... 11 12         |
|            | `h`    | 1 2 ... 11 12           |
| **AM/PM**  | `A`    | AM PM                   |
|            | `a`    | am pm                   |
| **Minute** | `mm`   | 00 01 ... 58 59         |
|            | `m`    | 0 1 ... 58 59           |
| **Second** | `ss`   | 00 01 ... 58 59         |
|            | `s`    | 0 1 ... 58 59           |

Default format is `YYYY.MM.DD HH:mm:ss`

## License

MIT © [Eduard Nikolenko](https://github.com/eduardnikolenko)
