'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function padStart(input, length) {
  var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

  var str = input.toString();

  while (str.length < length) {
    str = symbol + str;
  }

  return str;
}

function dateFormat() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY.MM.DD HH:mm:ss';

  return format.replace('YYYY', date.getFullYear()).replace('YY', date.getFullYear() % 100).replace('MM', padStart(date.getMonth() + 1, 2, '0')).replace('M', date.getMonth() + 1).replace('DD', padStart(date.getDate(), 2, '0')).replace('D', date.getDate()).replace('HH', padStart(date.getHours(), 2, '0')).replace('H', date.getHours()).replace('hh', padStart(date.getHours() % 12, 2, '0')).replace('h', date.getHours() % 12).replace('A', date.getHours() < 12 ? 'AM' : 'PM').replace('a', date.getHours() < 12 ? 'am' : 'pm').replace('mm', padStart(date.getMinutes(), 2, '0')).replace('m', date.getMinutes()).replace('ss', padStart(date.getSeconds(), 2, '0')).replace('s', date.getSeconds());
}

exports.default = {
  install: function install(Vue) {
    Vue.filter('date-format', dateFormat);
  }
};
module.exports = exports['default'];
