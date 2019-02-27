import { VueConstructor } from 'vue';

import { IDateFormatConfig } from './interfaces/i-date-format-config';
import { padStart } from './helpers/pad-start';
import { version } from '../package.json';

const defaultConfig: IDateFormatConfig = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
};

export const dateFormat = (
  input: Date,
  format = 'YYYY-MM-DD HH:mm:ss',
  config: Partial<IDateFormatConfig> = {}
): string => {
  config = { ...defaultConfig, ...config };

  return format
    .replace('YYYY', `${input.getFullYear()}`)
    .replace('YY', `${input.getFullYear() % 100}`)
    .replace('MMMM', `${config.monthNames[input.getMonth()]}`)
    .replace('MMM', `${config.monthNamesShort[input.getMonth()]}`)
    .replace('MM', padStart(`${input.getMonth() + 1}`, 2, '0'))
    .replace('M', `${input.getMonth() + 1}`)
    .replace('DD', padStart(`${input.getDate()}`, 2, '0'))
    .replace('D', `${input.getDate()}`)
    .replace('HH', padStart(`${input.getHours()}`, 2, '0'))
    .replace('H', `${input.getHours()}`)
    .replace('hh', padStart(`${input.getHours() % 12}`, 2, '0'))
    .replace('h', `${input.getHours() % 12}`)
    .replace('mm', padStart(`${input.getMinutes()}`, 2, '0'))
    .replace('m', `${input.getMinutes()}`)
    .replace('ss', padStart(`${input.getSeconds()}`, 2, '0'))
    .replace('s', `${input.getSeconds()}`)
    // Always last
    .replace('A', input.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', input.getHours() < 12 ? 'am' : 'pm');
};

export default {
  install (Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (input: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(input, format, { ...baseConfig, ...config });
    });
  },
  version
};
