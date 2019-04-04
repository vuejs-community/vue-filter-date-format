export interface IDateFormatConfig {
  monthNames: string[];
  monthNamesShort: string[];
}

const padStart = (input: string, maxLength: number = 0, fillString: string = ' '): string => {
  const length = maxLength - input.length;

  return `${Array.apply(null, { length }).map(() => fillString).join('')}${input}`;
};

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
  date: Date,
  format: string = 'YYYY.MM.DD HH:mm:ss',
  config: Partial<IDateFormatConfig> = {}
): string => {
  config = { ...defaultConfig, ...config };

  return format
    .replace('YYYY', `${("0000" + date.getFullYear()).slice(-4)}`)
    .replace('YY', `${date.getFullYear() % 100}`)
    .replace('MMMM', `${config.monthNames[date.getMonth()]}`)
    .replace('MMM', `${config.monthNamesShort[date.getMonth()]}`)
    .replace('MM', padStart(`${date.getMonth() + 1}`, 2, '0'))
    .replace('M', `${date.getMonth() + 1}`)
    .replace('DD', padStart(`${date.getDate()}`, 2, '0'))
    .replace('D', `${date.getDate()}`)
    .replace('HH', padStart(`${date.getHours()}`, 2, '0'))
    .replace('H', `${date.getHours()}`)
    .replace('hh', padStart(`${date.getHours() % 12}`, 2, '0'))
    .replace('h', `${date.getHours() % 12}`)
    .replace('mm', padStart(`${date.getMinutes()}`, 2, '0'))
    .replace('m', `${date.getMinutes()}`)
    .replace('ss', padStart(`${date.getSeconds()}`, 2, '0'))
    .replace('s', `${date.getSeconds()}`)
    .replace('A', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', date.getHours() < 12 ? 'am' : 'pm');
};
