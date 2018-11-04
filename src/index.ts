import { VueConstructor } from 'vue';

import { padStart } from './helpers/pad-start';
import { version } from '../package.json';

export const dateFormat = (input: Date, format = 'YYYY.MM.DD HH:mm:ss'): string => {
  return format
    .replace('YYYY', `${input.getFullYear()}`)
    .replace('YY', `${input.getFullYear() % 100}`)
    .replace('MM', padStart(`${input.getMonth() + 1}`, 2, '0'))
    .replace('M', `${input.getMonth() + 1}`)
    .replace('DD', padStart(`${input.getDate()}`, 2, '0'))
    .replace('D', `${input.getDate()}`)
    .replace('HH', padStart(`${input.getHours()}`, 2, '0'))
    .replace('H', `${input.getHours()}`)
    .replace('hh', padStart(`${input.getHours() % 12}`, 2, '0'))
    .replace('h', `${input.getHours() % 12}`)
    .replace('A', input.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', input.getHours() < 12 ? 'am' : 'pm')
    .replace('mm', padStart(`${input.getMinutes()}`, 2, '0'))
    .replace('m', `${input.getMinutes()}`)
    .replace('ss', padStart(`${input.getSeconds()}`, 2, '0'))
    .replace('s', `${input.getSeconds()}`);
};

export default {
  install (Vue: VueConstructor): void {
    Vue.filter('dateFormat', dateFormat);
  },
  version
};
