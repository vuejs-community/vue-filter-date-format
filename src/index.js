function padStart (input, length, symbol = ' ') {
  let str = input.toString()

  while (str.length < length) {
    str = symbol + str
  }

  return str
}

function dateFormat (date = new Date(), format = 'YYYY.MM.DD HH:mm:ss') {
  return format
    .replace('YYYY', date.getFullYear())
    .replace('YY', date.getFullYear() % 100)
    .replace('MM', padStart(date.getMonth() + 1, 2, '0'))
    .replace('M', date.getMonth() + 1)
    .replace('DD', padStart(date.getDate(), 2, '0'))
    .replace('D', date.getDate())
    .replace('HH', padStart(date.getHours(), 2, '0'))
    .replace('H', date.getHours())
    .replace('hh', padStart(date.getHours() % 12, 2, '0'))
    .replace('h', date.getHours() % 12)
    .replace('A', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', date.getHours() < 12 ? 'am' : 'pm')
    .replace('mm', padStart(date.getMinutes(), 2, '0'))
    .replace('m', date.getMinutes())
    .replace('ss', padStart(date.getSeconds(), 2, '0'))
    .replace('s', date.getSeconds())
}

export default {
  install (Vue) {
    Vue.filter('date-format', dateFormat)
  }
}
