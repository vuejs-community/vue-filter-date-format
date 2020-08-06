import { IDateFormatConfig } from '../vue-filter-date-format';
import { SecondsFormats } from '../enums/seconds-formats';
import { padStart } from '../helpers';

export function secondsTransformer(input: Date, format: SecondsFormats, config: IDateFormatConfig): string {
  const seconds = config.timezone ? input.getUTCSeconds() : input.getSeconds();

  if (format === SecondsFormats.ss) {
    return padStart(seconds, 2, '0');
  }
  if (format === SecondsFormats.s) {
    return seconds.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid seconds format '${format}'`);
}
