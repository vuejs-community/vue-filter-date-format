import { IDateFormatConfig } from '../vue-filter-date-format';
import { MinutesFormats } from '../enums/minutes-formats';
import { padZeros } from '../helpers';

export function minutesTransformer(input: Date, format: MinutesFormats, config: IDateFormatConfig): string {
  const minutes = config.timezone ? input.getUTCMinutes() : input.getMinutes();

  if (format === MinutesFormats.mm) {
    return padZeros(minutes, 2);
  }
  if (format === MinutesFormats.m) {
    return minutes.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid minutes format '${format}'`);
}
