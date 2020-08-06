import { IDateFormatConfig } from '../vue-filter-date-format';
import { MillisecondsFormats } from '../enums/milliseconds-formats';
import { padEnd } from '../helpers';

export function millisecondsTransformer(input: Date, format: MillisecondsFormats, config: IDateFormatConfig): string {
  const milliseconds = config.timezone ? input.getUTCMilliseconds() : input.getMilliseconds();

  if (format === MillisecondsFormats.SSS) {
    return padEnd(milliseconds, 3, '0');
  }
  if (format === MillisecondsFormats.S) {
    return milliseconds.toString();
  }

  throw new Error(`[vue-filter-date-format]: Invalid milliseconds format '${format}'`);
}
