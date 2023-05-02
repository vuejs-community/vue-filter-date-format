import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { DateFormats } from '../enums/date-formats.ts';
import { defaultConfig } from '../default-config.js';

export const dateTransformer = (input: Date, format: keyof typeof DateFormats, config: IDateFormatConfig = defaultConfig): string => {
  const date = 'timezone' in config ? input.getUTCDate() : input.getDate();

  if (format === DateFormats.DD) {
    return `${date}`.padStart(2, '0');
  }
  if (format === DateFormats.D) {
    return `${date}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid date format '${format}'`);
};
