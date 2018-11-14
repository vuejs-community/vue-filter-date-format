export const dateFormatFilter = (date: Date = new Date(), format: string = 'YYYY.MM.DD HH:mm:ss'): string => {
  return format
    .replace('YYYY', `${date.getFullYear()}`)
    .replace('YY', `${date.getFullYear() % 100}`)
    .replace('MM', `${date.getMonth() + 1}`.padStart(2, '0'))
    .replace('M', `${date.getMonth() + 1}`)
    .replace('DD', `${date.getDate()}`.padStart(2, '0'))
    .replace('D', `${date.getDate()}`)
    .replace('HH', `${date.getHours()}`.padStart(2, '0'))
    .replace('H', `${date.getHours()}`)
    .replace('hh', `${date.getHours() % 12}`.padStart(2, '0'))
    .replace('h', `${date.getHours() % 12}`)
    .replace('A', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', date.getHours() < 12 ? 'am' : 'pm')
    .replace('mm', `${date.getMinutes()}`.padStart(2, '0'))
    .replace('m', `${date.getMinutes()}`)
    .replace('ss', `${date.getSeconds()}`.padStart(2, '0'))
    .replace('s', `${date.getSeconds()}`);
};
