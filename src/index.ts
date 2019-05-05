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

  const year = input.getFullYear();
  const month = input.getMonth() + 1;
  const date = input.getDate();
  const hours24 = input.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const minutes = input.getMinutes();
  const seconds = input.getSeconds();

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
    .replace(Tokens.YYYY, `${year}`)
    .replace(Tokens.YY, `${year % 100}`)
    .replace(Tokens.MMMM, `${config.monthNames[month - 1]}`)
    .replace(Tokens.MMM, `${config.monthNamesShort[month - 1]}`)
    .replace(Tokens.MM, padStart(`${month}`, 2, '0'))
    .replace(Tokens.M, `${month}`)
    .replace(Tokens.DD, padStart(`${date}`, 2, '0'))
    .replace(Tokens.D, `${date}`)
    .replace(Tokens.HH, padStart(`${hours24}`, 2, '0'))
    .replace(Tokens.H, `${hours24}`)
    .replace(Tokens.hh, padStart(`${hours12}`, 2, '0'))
    .replace(Tokens.h, `${hours12}`)
    .replace(Tokens.mm, padStart(`${minutes}`, 2, '0'))
    .replace(Tokens.m, `${minutes}`)
    .replace(Tokens.ss, padStart(`${seconds}`, 2, '0'))
    .replace(Tokens.s, `${seconds}`)
    .replace(Tokens.A, hours24 < 12 ? 'AM' : 'PM')
    .replace(Tokens.a, hours24 < 12 ? 'am' : 'pm');
};

export default {
  install (Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (input: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(input, format, { ...baseConfig, ...config });
    });
  },
  version
};
