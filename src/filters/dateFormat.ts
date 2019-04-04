export interface IDateFormatConfig {
  monthNames: string[];
  monthNamesShort: string[];
}

const padZeros = (input: number, maxLength: number = 0): string => {
  return `0000${input}`.slice(-maxLength);
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
    // Normalize tokens
    .replace('YYYY', '%01%')
    .replace('YY', '%02%')
    .replace('MMMM', '%03%')
    .replace('MMM', '%04%')
    .replace('MM', '%05%')
    .replace('M', '%06%')
    .replace('DD', '%07%')
    .replace('D', '%08%')
    .replace('HH', '%09%')
    .replace('H', '%10%')
    .replace('hh', '%11%')
    .replace('h', '%12%')
    .replace('mm', '%13%')
    .replace('ss', '%14%')
    .replace('s', '%15%')
    .replace('A', '%16%')
    .replace('a', '%17%')
    // Insert values
    .replace('%01%', padZeros(date.getFullYear(), 4))
    .replace('%02%', padZeros(date.getFullYear() % 100, 2))
    .replace('%03%', `${config.monthNames[date.getMonth()]}`)
    .replace('%04%', `${config.monthNamesShort[date.getMonth()]}`)
    .replace('%05%', padZeros(date.getMonth() + 1, 2))
    .replace('%06%', `${date.getMonth() + 1}`)
    .replace('%07%', padZeros(date.getDate(), 2))
    .replace('%08%', `${date.getDate()}`)
    .replace('%09%', padZeros(date.getHours(), 2))
    .replace('%10%', `${date.getHours()}`)
    .replace('%11%', padZeros(date.getHours() % 12, 2))
    .replace('%12%', `${date.getHours() % 12}`)
    .replace('%13%', padZeros(date.getMinutes(), 2))
    .replace('%14%', padZeros(date.getSeconds(), 2))
    .replace('%15%', `${date.getSeconds()}`)
    .replace('%16%', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('%17%', date.getHours() < 12 ? 'am' : 'pm');
};
