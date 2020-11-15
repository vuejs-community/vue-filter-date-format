import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { YearFormats } from '../enums/year-formats';
import { padStart } from '../helpers/pad-start';

export const yearTransformer = (input: Date, format: YearFormats, config: IDateFormatConfig): string => {
  const year = 'timezone' in config ? input.getUTCFullYear() : input.getFullYear();

  if (format === YearFormats.YYYY) {
    return padStart(`${year}`, 4);
  }
  if (format === YearFormats.YY) {
    return padStart(`${year % 100}`, 2);
  }

  throw new Error(`[vue-filter-date-format]: Invalid year format '${format}'`);
};
