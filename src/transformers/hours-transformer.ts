import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { HoursFormats } from '../enums/hours-formats';
import { padStart } from '../helpers/pad-start';

export const hoursTransformer = (input: Date, format: HoursFormats, config: IDateFormatConfig): string => {
  const hours24 = 'timezone' in config ? input.getUTCHours() : input.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  if (format === HoursFormats.HH) {
    return padStart(`${hours24}`, 2);
  }
  if (format === HoursFormats.H) {
    return `${hours24}`;
  }
  if (format === HoursFormats.hh) {
    return padStart(`${hours12}`, 2);
  }
  if (format === HoursFormats.h) {
    return `${hours12}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid hours format '${format}'`);
};
