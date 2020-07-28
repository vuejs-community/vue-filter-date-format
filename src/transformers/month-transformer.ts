import { IDateFormatConfig } from '../vue-filter-date-format';
import { MonthFormats } from '../enums/month-formats';
import { padZeros } from '../helpers';

export function monthTransformer(input: Date, format: MonthFormats, config: IDateFormatConfig): string {
  const month = (config.timezone ? input.getUTCMonth() : input.getMonth()) + 1;

  if (format === MonthFormats.MMMM) {
    return config.monthNames[month - 1];
  }
  if (format === MonthFormats.MMM) {
    return config.monthNamesShort[month - 1];
  }
  if (format === MonthFormats.MM) {
    return padZeros(month, 2);
  }
  if (format === MonthFormats.M) {
    return month.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid month format '${format}'`);
}
