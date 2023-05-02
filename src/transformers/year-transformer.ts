import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { YearFormats } from '../enums/year-formats.ts';
import { defaultConfig } from '../default-config.js';

export const yearTransformer = (input: Date, format: keyof typeof YearFormats, config: IDateFormatConfig = defaultConfig): string => {
  const year = 'timezone' in config ? input.getUTCFullYear() : input.getFullYear();

  if (format === YearFormats.YYYY) {
    return `${year}`.padStart(4, '0');
  }
  if (format === YearFormats.YY) {
    return `${year % 100}`.padStart(2, '0');
  }

  throw new Error(`[vue-filter-date-format]: Invalid year format '${format}'`);
};
