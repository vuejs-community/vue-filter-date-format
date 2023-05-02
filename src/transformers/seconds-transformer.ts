import { IDateFormatConfig } from '../interfaces/i-date-format-config.ts';
import { SecondsFormats } from '../enums/seconds-formats.ts';
import { defaultConfig } from '../default-config.js';

export const secondsTransformer = (input: Date, format: keyof typeof SecondsFormats, config: IDateFormatConfig = defaultConfig): string => {
  const seconds = 'timezone' in config ? input.getUTCSeconds() : input.getSeconds();

  if (format === SecondsFormats.ss) {
    return `${seconds}`.padStart(2, '0');
  }
  if (format === SecondsFormats.s) {
    return `${seconds}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid seconds format '${format}'`);
};
