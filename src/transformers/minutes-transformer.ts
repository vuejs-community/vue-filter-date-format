import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { MinutesFormats } from '../enums/minutes-formats.ts';
import { defaultConfig } from '../default-config.js';

export const minutesTransformer = (input: Date, format: keyof typeof MinutesFormats, config: IDateFormatConfig = defaultConfig): string => {
  const minutes = 'timezone' in config ? input.getUTCMinutes() : input.getMinutes();

  if (format === MinutesFormats.mm) {
    return `${minutes}`.padStart(2, '0');
  }
  if (format === MinutesFormats.m) {
    return `${minutes}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid minutes format '${format}'`);
};
