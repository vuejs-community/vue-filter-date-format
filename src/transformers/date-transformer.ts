import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { DateFormats } from '../enums/date-formats';
import { padStart } from '../helpers/pad-start';

export const dateTransformer = (input: Date, format: DateFormats, config: IDateFormatConfig): string => {
  const date = 'timezone' in config ? input.getUTCDate() : input.getDate();

  if (format === DateFormats.DD) {
    return padStart(`${date}`, 2);
  }
  if (format === DateFormats.D) {
    return `${date}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid date format '${format}'`);
};
