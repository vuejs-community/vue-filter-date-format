import { IDateFormatConfig } from '../vue-filter-date-format';
import { YearFormats } from '../enums/year-formats';
import { padStart } from '../helpers';

export function yearTransformer(input: Date, format: YearFormats, config: IDateFormatConfig): string {
  const year = config.timezone ? input.getUTCFullYear() : input.getFullYear();

  if (format === YearFormats.YYYY) {
    return padStart(year, 4, '0');
  }
  if (format === YearFormats.YY) {
    return padStart(year % 100, 2, '0');
  }

  throw new Error(`[vue-filter-date-format]: Invalid year format '${format}'`);
}
