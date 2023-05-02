import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { MonthFormats } from '../enums/month-formats.ts';
import { defaultConfig } from '../default-config.js';

export const monthTransformer = (input: Date, format: keyof typeof MonthFormats, config: IDateFormatConfig = defaultConfig): string => {
  const month = ('timezone' in config ? input.getUTCMonth() : input.getMonth()) + 1;

  if (format === MonthFormats.MMMM) {
    return config.monthNames[month - 1];
  }
  if (format === MonthFormats.MMM) {
    return config.monthNamesShort[month - 1];
  }
  if (format === MonthFormats.MM) {
    return `${month}`.padStart(2, '0');
  }
  if (format === MonthFormats.M) {
    return `${month}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid month format '${format}'`);
};
