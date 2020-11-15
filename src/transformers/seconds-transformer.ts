import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { SecondsFormats } from '../enums/seconds-formats';
import { padStart } from '../helpers/pad-start';

export const secondsTransformer = (input: Date, format: SecondsFormats, config: IDateFormatConfig): string => {
  const seconds = 'timezone' in config ? input.getUTCSeconds() : input.getSeconds();

  if (format === SecondsFormats.ss) {
    return padStart(`${seconds}`, 2);
  }
  if (format === SecondsFormats.s) {
    return `${seconds}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid seconds format '${format}'`);
};
