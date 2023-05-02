import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { MillisecondsFormats } from '../enums/milliseconds-formats.ts';
import { defaultConfig } from '../default-config.js';

export const millisecondsTransformer = (input: Date, format: keyof typeof MillisecondsFormats, config: IDateFormatConfig = defaultConfig): string => {
  const milliseconds = 'timezone' in config ? input.getUTCMilliseconds() : input.getMilliseconds();

  if (format === MillisecondsFormats.SSS) {
    return `${milliseconds}`.padEnd(3, '0');
  }
  if (format === MillisecondsFormats.S) {
    return `${milliseconds}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid milliseconds format '${format}'`);
};
