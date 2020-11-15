import { VueConstructor } from 'vue';

import { DateFormats } from './enums/date-formats';
import { HoursFormats } from './enums/hours-formats';
import { MillisecondsFormats } from './enums/milliseconds-formats';
import { MinutesFormats } from './enums/minutes-formats';
import { MonthFormats } from './enums/month-formats';
import { PeriodFormats } from './enums/period-formats';
import { SecondsFormats } from './enums/seconds-formats';
import { WeekdayFormats } from './enums/weekday-formats';
import { YearFormats } from './enums/year-formats';
import { IDateFormatConfig } from './interfaces/i-date-format-config';
import { Tokens } from './enums/tokens';
import { dateTransformer } from './transformers/date-transformer';
import { hoursTransformer } from './transformers/hours-transformer';
import { millisecondsTransformer } from './transformers/milliseconds-transformer';
import { minutesTransformer } from './transformers/minutes-transformer';
import { monthTransformer } from './transformers/month-transformer';
import { periodTransformer } from './transformers/period-transformer';
import { secondsTransformer } from './transformers/seconds-transformer';
import { weekdayTransformer } from './transformers/weekday-transformer';
import { yearTransformer } from './transformers/year-transformer';
import { version } from '../package.json';

const defaultConfig: IDateFormatConfig = {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],

  dateTransformer,
  hoursTransformer,
  millisecondsTransformer,
  minutesTransformer,
  monthTransformer,
  periodTransformer,
  secondsTransformer,
  weekdayTransformer,
  yearTransformer
};

export const dateFormat = (
  input: Date,
  format = 'YYYY-MM-DD HH:mm:ss',
  config: IDateFormatConfig = {}
): string => {
  config = { ...defaultConfig, ...config };

  if ('timezone' in config) {
    input.setMinutes(input.getMinutes() + config.timezone);
  }

  return format
    // Normalize tokens
    .replace(YearFormats.YYYY, Tokens.YYYY)
    .replace(YearFormats.YY, Tokens.YY)
    .replace(MonthFormats.MMMM, Tokens.MMMM)
    .replace(MonthFormats.MMM, Tokens.MMM)
    .replace(MonthFormats.MM, Tokens.MM)
    .replace(MonthFormats.M, Tokens.M)
    .replace(DateFormats.DD, Tokens.DD)
    .replace(DateFormats.D, Tokens.D)
    .replace(HoursFormats.HH, Tokens.HH)
    .replace(HoursFormats.H, Tokens.H)
    .replace(HoursFormats.hh, Tokens.hh)
    .replace(HoursFormats.h, Tokens.h)
    .replace(MinutesFormats.mm, Tokens.mm)
    .replace(MinutesFormats.m, Tokens.m)
    .replace(SecondsFormats.ss, Tokens.ss)
    .replace(SecondsFormats.s, Tokens.s)
    .replace(PeriodFormats.A, Tokens.A)
    .replace(PeriodFormats.a, Tokens.a)
    .replace(WeekdayFormats.dddd, Tokens.dddd)
    .replace(WeekdayFormats.dd, Tokens.dd)
    .replace(WeekdayFormats.d, Tokens.d)
    .replace(MillisecondsFormats.SSS, Tokens.SSS)
    .replace(MillisecondsFormats.S, Tokens.S)
    // Insert values
    .replace(Tokens.YYYY, yearTransformer(input, YearFormats.YYYY, config))
    .replace(Tokens.YY, yearTransformer(input, YearFormats.YY, config))
    .replace(Tokens.MMMM, monthTransformer(input, MonthFormats.MMMM, config))
    .replace(Tokens.MMM, monthTransformer(input, MonthFormats.MMM, config))
    .replace(Tokens.MM, monthTransformer(input, MonthFormats.MM, config))
    .replace(Tokens.M, monthTransformer(input, MonthFormats.M, config))
    .replace(Tokens.DD, dateTransformer(input, DateFormats.DD, config))
    .replace(Tokens.D, dateTransformer(input, DateFormats.D, config))
    .replace(Tokens.HH, hoursTransformer(input, HoursFormats.HH, config))
    .replace(Tokens.H, hoursTransformer(input, HoursFormats.H, config))
    .replace(Tokens.hh, hoursTransformer(input, HoursFormats.hh, config))
    .replace(Tokens.h, hoursTransformer(input, HoursFormats.h, config))
    .replace(Tokens.mm, minutesTransformer(input, MinutesFormats.mm, config))
    .replace(Tokens.m, minutesTransformer(input, MinutesFormats.m, config))
    .replace(Tokens.ss, secondsTransformer(input, SecondsFormats.ss, config))
    .replace(Tokens.s, secondsTransformer(input, SecondsFormats.s, config))
    .replace(Tokens.A, periodTransformer(input, PeriodFormats.A, config))
    .replace(Tokens.a, periodTransformer(input, PeriodFormats.a, config))
    .replace(Tokens.dddd, weekdayTransformer(input, WeekdayFormats.dddd, config))
    .replace(Tokens.dd, weekdayTransformer(input, WeekdayFormats.dd, config))
    .replace(Tokens.d, weekdayTransformer(input, WeekdayFormats.d, config))
    .replace(Tokens.SSS, millisecondsTransformer(input, MillisecondsFormats.SSS, config))
    .replace(Tokens.S, millisecondsTransformer(input, MillisecondsFormats.S, config));
};

export default {
  install (Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (input: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(input, format, { ...baseConfig, ...config });
    });
  },
  version
};
