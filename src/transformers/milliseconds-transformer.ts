import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { MillisecondsFormats } from '../enums/milliseconds-formats';
import { padEnd } from '../helpers/pad-end';

export const millisecondsTransformer = (input: Date, format: MillisecondsFormats, config: IDateFormatConfig): string => {
  const milliseconds = 'timezone' in config ? input.getUTCMilliseconds() : input.getMilliseconds();

  if (format === MillisecondsFormats.SSS) {
    return padEnd(`${milliseconds}`, 3, '0');
  }
  if (format === MillisecondsFormats.S) {
    return `${milliseconds}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid milliseconds format '${format}'`);
};
