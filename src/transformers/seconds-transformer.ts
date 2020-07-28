import { IDateFormatConfig } from '../vue-filter-date-format';
import { SecondsFormats } from '../enums/seconds-formats';
import { padZeros } from '../helpers';

export function secondsTransformer(input: Date, format: SecondsFormats, config: IDateFormatConfig): string {
  const seconds = config.timezone ? input.getUTCSeconds() : input.getSeconds();

  if (format === SecondsFormats.ss) {
    return padZeros(seconds, 2);
  }
  if (format === SecondsFormats.s) {
    return seconds.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid seconds format '${format}'`);
}
