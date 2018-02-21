# vue-filter-date-format
Simple datetime filter for Vue.js

## Installation

```bash
$ npm install vue-filter-date-format
```
and register
```js
import Vue from 'vue'
import VueFilterDateFormat from 'vue-filter-date-format'

Vue.use(VueFilterDateFormat)
```

## Usage

```html
<template>
  <div>{{ new Date | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

## License

MIT © [Eduard Nikolenko](https://github.com/eduardnikolenko)
