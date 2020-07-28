import { IDateFormatConfig } from '../vue-filter-date-format';
import { YearFormats } from '../enums/year-formats';
import { padZeros } from '../helpers';

export function yearTransformer(input: Date, format: YearFormats, config: IDateFormatConfig): string {
  const year = config.timezone ? input.getUTCFullYear() : input.getFullYear();

  if (format === YearFormats.YYYY) {
    return padZeros(year, 4);
  }
  if (format === YearFormats.YY) {
    return padZeros(year % 100, 2);
  }

  throw new Error(`[vue-filter-date-format]: Invalid year format '${format}'`);
}
