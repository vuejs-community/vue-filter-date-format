# @vuejs-community/vue-filter-date-format
Simple datetime filter for Vue.js

## Installation

install from npm
```bash
$ npm install @vuejs-community/vue-filter-date-format
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

Vue.use(VueFilterDateFormat);
```
or register in you Vue app with config
```js
import Vue from 'vue';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 0
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
          dayOfWeekNames: [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday'
          ],
          dayOfWeekNamesShort: [
            'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
          ],
          monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ],
          monthNamesShort: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
          timezone: 0
        }
      };
    }
  };
</script>
```

usage with [dateParse filter](https://github.com/vuejs-community/vue-filter-date-parse):
```html
<template>
  <div>{{ '10.10.1989' | dateParse('DD.MM.YYYY') | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

## Format Options

|             | Key    | Output                                 |
| ----------- | ------ | -------------------------------------- |
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
| Millisecond | `S`    | 0 1 ... 58 59                          |
|             | `SSS`  | 000 001 ... 058 059                    |
| Day of Week | `dddd` | Sunday Monday ... Friday Saturday      |
|             | `dd`   | Su Mo ... Fr Sa                        |
|             | `d`    | 0 1 ... 5 6

Default format is `YYYY.MM.DD HH:mm:ss`

## License

MIT © [Vue.js Community](https://github.com/vuejs-community)
