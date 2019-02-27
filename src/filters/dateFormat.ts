export interface IDateFormatConfig {
  monthNames: string[];
  monthNamesShort: string[];
}

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
    .replace('YYYY', `${date.getFullYear()}`)
    .replace('YY', `${date.getFullYear() % 100}`)
    .replace('MMMM', `${config.monthNames[date.getMonth()]}`)
    .replace('MMM', `${config.monthNamesShort[date.getMonth()]}`)
    .replace('MM', `${date.getMonth() + 1}`.padStart(2, '0'))
    .replace('M', `${date.getMonth() + 1}`)
    .replace('DD', `${date.getDate()}`.padStart(2, '0'))
    .replace('D', `${date.getDate()}`)
    .replace('HH', `${date.getHours()}`.padStart(2, '0'))
    .replace('H', `${date.getHours()}`)
    .replace('hh', `${date.getHours() % 12}`.padStart(2, '0'))
    .replace('h', `${date.getHours() % 12}`)
    .replace('mm', `${date.getMinutes()}`.padStart(2, '0'))
    .replace('m', `${date.getMinutes()}`)
    .replace('ss', `${date.getSeconds()}`.padStart(2, '0'))
    .replace('s', `${date.getSeconds()}`)
    .replace('A', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('a', date.getHours() < 12 ? 'am' : 'pm');
};
