import { IDateFormatConfig } from '../vue-filter-date-format';
import { HoursFormats } from '../enums/hours-formats';
import { padZeros } from '../helpers';

export function hoursTransformer(input: Date, format: HoursFormats, config: IDateFormatConfig): string {
  const hours24 = config.timezone ? input.getUTCHours() : input.getHours();
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  if (format === HoursFormats.HH) {
    return padZeros(hours24, 2);
  }
  if (format === HoursFormats.H) {
    return hours24.toString();
  }
  if (format === HoursFormats.hh) {
    return padZeros(hours12, 2);
  }
  if (format === HoursFormats.h) {
    return hours12.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid hours format '${format}'`);
}
