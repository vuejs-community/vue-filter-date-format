import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { HoursFormats } from '../enums/hours-formats.ts';
import { defaultConfig } from '../default-config.js';

export const hoursTransformer = (input: Date, format: keyof typeof HoursFormats, config: IDateFormatConfig = defaultConfig): string => {
  const hours24 = 'timezone' in config ? input.getUTCHours() : input.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  if (format === HoursFormats.HH) {
    return `${hours24}`.padStart(2, '0');
  }
  if (format === HoursFormats.H) {
    return `${hours24}`;
  }
  if (format === HoursFormats.hh) {
    return `${hours12}`.padStart(2, '0');
  }
  if (format === HoursFormats.h) {
    return `${hours12}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid hours format '${format}'`);
};
