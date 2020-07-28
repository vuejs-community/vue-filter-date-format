import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { MinutesFormats } from '../enums/minutes-formats';
import { padStart } from '../helpers/pad-start';

export function minutesTransformer(input: Date, format: MinutesFormats, config: IDateFormatConfig): string {
  const minutes = config.timezone ? input.getUTCMinutes() : input.getMinutes();

  if (format === MinutesFormats.mm) {
    return padStart(`${minutes}`, 2);
  }
  if (format === MinutesFormats.m) {
    return `${minutes}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid minutes format '${format}'`);
}
