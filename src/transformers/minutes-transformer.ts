import { IDateFormatConfig } from '../vue-filter-date-format';
import { MinutesFormats } from '../enums/minutes-formats';
import { padStart } from '../helpers';

export function minutesTransformer(input: Date, format: MinutesFormats, config: IDateFormatConfig): string {
  const minutes = config.timezone ? input.getUTCMinutes() : input.getMinutes();

  if (format === MinutesFormats.mm) {
    return padStart(minutes, 2, '0');
  }
  if (format === MinutesFormats.m) {
    return minutes.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid minutes format '${format}'`);
}
