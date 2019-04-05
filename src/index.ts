import { VueConstructor } from 'vue';

import { IDateFormatConfig } from './interfaces/i-date-format-config';
import { padStart } from './helpers/pad-start';
import { version } from '../package.json';
import { Tokens } from './enums/tokens';

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
    // Normalize tokens
    .replace('YYYY', Tokens.YYYY)
    .replace('YY', Tokens.YY)
    .replace('MMMM', Tokens.MMMM)
    .replace('MMM', Tokens.MMM)
    .replace('MM', Tokens.MM)
    .replace('M', Tokens.M)
    .replace('DD', Tokens.DD)
    .replace('D', Tokens.D)
    .replace('HH', Tokens.HH)
    .replace('H', Tokens.H)
    .replace('hh', Tokens.hh)
    .replace('h', Tokens.h)
    .replace('mm', Tokens.mm)
    .replace('m', Tokens.m)
    .replace('ss', Tokens.ss)
    .replace('s', Tokens.s)
    .replace('A', Tokens.A)
    .replace('a', Tokens.a)
    // Insert values
    .replace(Tokens.YYYY, `${input.getFullYear()}`)
    .replace(Tokens.YY, `${input.getFullYear() % 100}`)
    .replace(Tokens.MMMM, `${config.monthNames[input.getMonth()]}`)
    .replace(Tokens.MMM, `${config.monthNamesShort[input.getMonth()]}`)
    .replace(Tokens.MM, padStart(`${input.getMonth() + 1}`, 2, '0'))
    .replace(Tokens.M, `${input.getMonth() + 1}`)
    .replace(Tokens.DD, padStart(`${input.getDate()}`, 2, '0'))
    .replace(Tokens.D, `${input.getDate()}`)
    .replace(Tokens.HH, padStart(`${input.getHours()}`, 2, '0'))
    .replace(Tokens.H, `${input.getHours()}`)
    .replace(Tokens.hh, padStart(`${input.getHours() % 12}`, 2, '0'))
    .replace(Tokens.h, `${input.getHours() % 12}`)
    .replace(Tokens.mm, padStart(`${input.getMinutes()}`, 2, '0'))
    .replace(Tokens.m, `${input.getMinutes()}`)
    .replace(Tokens.ss, padStart(`${input.getSeconds()}`, 2, '0'))
    .replace(Tokens.s, `${input.getSeconds()}`)
    // Always last
    .replace(Tokens.A, input.getHours() < 12 ? 'AM' : 'PM')
    .replace(Tokens.a, input.getHours() < 12 ? 'am' : 'pm');
};

export default {
  install (Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (input: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(input, format, { ...baseConfig, ...config });
    });
  },
  version
};
