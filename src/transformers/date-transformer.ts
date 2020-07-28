import { IDateFormatConfig } from '../vue-filter-date-format';
import { DateFormats } from '../enums/date-formats';
import { padZeros } from '../helpers';

export function dateTransformer(input: Date, format: DateFormats, config: IDateFormatConfig): string {
  const date = config.timezone ? input.getUTCDate() : input.getDate();

  if (format === DateFormats.DD) {
    return padZeros(date, 2);
  }
  if (format === DateFormats.D) {
    return date.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid date format '${format}'`);
}
