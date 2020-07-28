import { VueConstructor } from 'vue';

import { version } from '../package.json';

import { DateFormats } from './enums/date-formats';
import { HoursFormats } from './enums/hours-formats';
import { MinutesFormats } from './enums/minutes-formats';
import { MonthFormats } from './enums/month-formats';
import { PeriodFormats } from './enums/period-formats';
import { SecondsFormats } from './enums/seconds-formats';
import { WeekdayFormats } from './enums/weekday-formats';
import { YearFormats } from './enums/year-formats';

import { dateTransformer } from './transformers/date-transformer';
import { hoursTransformer } from './transformers/hours-transformer';
import { minutesTransformer } from './transformers/minutes-transformer';
import { monthTransformer } from './transformers/month-transformer';
import { periodTransformer } from './transformers/period-transformer';
import { secondsTransformer } from './transformers/seconds-transformer';
import { weekdayTransformer } from './transformers/weekday-transformer';
import { yearTransformer } from './transformers/year-transformer';

export interface IDateFormatConfig {
  dayOfWeekNames: string[];
  dayOfWeekNamesShort: string[];
  monthNames: string[];
  monthNamesShort: string[];
  timezone?: number;
  dateTransformer: Function;
  hoursTransformer: Function;
  minutesTransformer: Function;
  monthTransformer: Function;
  periodTransformer: Function;
  secondsTransformer: Function;
  weekdayTransformer: Function;
  yearTransformer: Function;
}

const defaultConfig: IDateFormatConfig = {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
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
  minutesTransformer,
  monthTransformer,
  periodTransformer,
  secondsTransformer,
  weekdayTransformer,
  yearTransformer
};

export function dateFormat(
  input: Date,
  format: string = 'YYYY.MM.DD HH:mm:ss',
  customConfig: Partial<IDateFormatConfig> = {}
): string {
  const config: IDateFormatConfig = { ...defaultConfig, ...customConfig };

  if (config.timezone) {
    input.setMinutes(input.getMinutes() + config.timezone);
  }

  return format
    // Normalize tokens
    .replace(YearFormats.YYYY, '%01%')
    .replace(YearFormats.YY, '%02%')
    .replace(MonthFormats.MMMM, '%03%')
    .replace(MonthFormats.MMM, '%04%')
    .replace(MonthFormats.MM, '%05%')
    .replace(MonthFormats.M, '%06%')
    .replace(DateFormats.DD, '%07%')
    .replace(DateFormats.D, '%08%')
    .replace(HoursFormats.HH, '%09%')
    .replace(HoursFormats.H, '%10%')
    .replace(HoursFormats.hh, '%11%')
    .replace(HoursFormats.h, '%12%')
    .replace(MinutesFormats.mm, '%13%')
    .replace(MinutesFormats.m, '%14%')
    .replace(SecondsFormats.ss, '%15%')
    .replace(SecondsFormats.s, '%16%')
    .replace(PeriodFormats.A, '%17%')
    .replace(PeriodFormats.a, '%18%')
    .replace(WeekdayFormats.dddd, '%19%')
    .replace(WeekdayFormats.dd, '%20%')
    .replace(WeekdayFormats.d, '%21%')
    // Insert values
    .replace('%01%', yearTransformer(input, YearFormats.YYYY, config))
    .replace('%02%', yearTransformer(input, YearFormats.YY, config))
    .replace('%03%', monthTransformer(input, MonthFormats.MMMM, config))
    .replace('%04%', monthTransformer(input, MonthFormats.MMM, config))
    .replace('%05%', monthTransformer(input, MonthFormats.MM, config))
    .replace('%06%', monthTransformer(input, MonthFormats.M, config))
    .replace('%07%', dateTransformer(input, DateFormats.DD, config))
    .replace('%08%', dateTransformer(input, DateFormats.D, config))
    .replace('%09%', hoursTransformer(input, HoursFormats.HH, config))
    .replace('%10%', hoursTransformer(input, HoursFormats.H, config))
    .replace('%11%', hoursTransformer(input, HoursFormats.hh, config))
    .replace('%12%', hoursTransformer(input, HoursFormats.h, config))
    .replace('%13%', minutesTransformer(input, MinutesFormats.mm, config))
    .replace('%14%', minutesTransformer(input, MinutesFormats.m, config))
    .replace('%15%', secondsTransformer(input, SecondsFormats.ss, config))
    .replace('%16%', secondsTransformer(input, SecondsFormats.s, config))
    .replace('%17%', periodTransformer(input, PeriodFormats.A, config))
    .replace('%18%', periodTransformer(input, PeriodFormats.a, config))
    .replace('%19%', weekdayTransformer(input, WeekdayFormats.dddd, config))
    .replace('%20%', weekdayTransformer(input, WeekdayFormats.dd, config))
    .replace('%21%', weekdayTransformer(input, WeekdayFormats.d, config));
}

export default {
  install(Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (date: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(date, format, { ...baseConfig, ...config });
    });
  },
  version
};
