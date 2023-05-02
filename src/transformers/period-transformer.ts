import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { PeriodFormats } from '../enums/period-formats.ts';
import { defaultConfig } from '../default-config.js';

export const periodTransformer = (input: Date, format: keyof typeof PeriodFormats, config: IDateFormatConfig = defaultConfig): string => {
  const hours24 = 'timezone' in config ? input.getUTCHours() : input.getHours();

  if (format === PeriodFormats.A) {
    return hours24 < 12 ? 'AM' : 'PM';
  }
  if (format === PeriodFormats.a) {
    return hours24 < 12 ? 'am' : 'pm';
  }

  throw new Error(`[vue-filter-date-format]: Invalid period format '${format}'`);
};
