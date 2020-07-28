import { IDateFormatConfig } from '../interfaces/i-date-format-config';
import { WeekdayFormats } from '../enums/weekday-formats';

export function weekdayTransformer(input: Date, format: WeekdayFormats, config: IDateFormatConfig): string {
  const weekday = config.timezone ? input.getUTCDay() : input.getDay();

  if (format === WeekdayFormats.dddd) {
    return config.dayOfWeekNames[weekday];
  }
  if (format === WeekdayFormats.dd) {
    return config.dayOfWeekNamesShort[weekday];
  }
  if (format === WeekdayFormats.d) {
    return `${weekday}`;
  }

  throw new Error(`[vue-filter-date-format]: Invalid weekday format '${format}'`);
}
