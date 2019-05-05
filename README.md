# vue-filter-date-format
Simple date formatting filter for Vue.js

## Installation

install from npm
```bash
$ npm install vue-filter-date-format
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueFilterDateFormat);
```

or register in you Vue app with config
```js
import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueFilterDateFormat, {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
});
```

## Usage

basic usage
```html
<template>
  <div>{{ new Date() | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

usage with config
```html
<template>
  <div>{{ new Date() | dateFormat('YYYY.MM.DD', dateFormatConfig) }}</div>
</template>

<script>
  export default {
    data () {
      return {
        dateFormatConfig: {
          monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ],
          monthNamesShort: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        }
      };
    }
  };
</script>
```

usage with [dateParse filter](https://github.com/ednikolenko/vue-filter-date-parse):
```html
<template>
  <div>{{ '19.07.1956' | dateParse('DD.MM.YYYY') | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

## Format Options

|             | Key    | Output                                 |
|-------------| ------ | -------------------------------------- |
| Year        | `YYYY` | 1970 1971 ... 2029 2030                |
|             | `YY`   | 70 71 ... 29 30                        |
| Month       | `MMMM` | January February ... November December |
|             | `MMM`  | Jan Feb ... Nov Dec                    |
|             | `MM`   | 01 02 ... 11 12                        |
|             | `M`    | 1 2 ... 11 12                          |
| Day         | `DD`   | 01 02 ... 30 31                        |
|             | `D`    | 1 2 ... 30 31                          |
| Hour        | `HH`   | 00 01 ... 22 23                        |
|             | `H`    | 0 1 ... 22 23                          |
|             | `hh`   | 01 02 ... 11 12                        |
|             | `h`    | 1 2 ... 11 12                          |
| AM/PM       | `A`    | AM PM                                  |
|             | `a`    | am pm                                  |
| Minute      | `mm`   | 00 01 ... 58 59                        |
|             | `m`    | 0 1 ... 58 59                          |
| Second      | `ss`   | 00 01 ... 58 59                        |
|             | `s`    | 0 1 ... 58 59                          |

Default format is `YYYY-MM-DD HH:mm:ss`

## License

MIT © [Ed Nikolenko](https://github.com/ednikolenko)
