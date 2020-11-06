import { IDateFormatConfig } from '../vue-filter-date-format';
import { MonthFormats } from '../enums/month-formats';
import { padStart } from '../helpers';

export function monthTransformer(input: Date, format: MonthFormats, config: IDateFormatConfig): string {
  const month = ('timezone' in config ? input.getUTCMonth() : input.getMonth()) + 1;

  if (format === MonthFormats.MMMM) {
    return config.monthNames[month - 1];
  }
  if (format === MonthFormats.MMM) {
    return config.monthNamesShort[month - 1];
  }
  if (format === MonthFormats.MM) {
    return padStart(month, 2, '0');
  }
  if (format === MonthFormats.M) {
    return month.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid month format '${format}'`);
}
