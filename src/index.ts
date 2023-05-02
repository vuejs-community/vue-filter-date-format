import { DateFormats } from './enums/date-formats.ts';
import { HoursFormats } from './enums/hours-formats.ts';
import { MillisecondsFormats } from './enums/milliseconds-formats.ts';
import { MinutesFormats } from './enums/minutes-formats.ts';
import { MonthFormats } from './enums/month-formats.ts';
import { PeriodFormats } from './enums/period-formats.ts';
import { SecondsFormats } from './enums/seconds-formats.ts';
import { WeekdayFormats } from './enums/weekday-formats.ts';
import { YearFormats } from './enums/year-formats.ts';
import { IDateFormatConfig } from './interfaces/i-date-format-config.ts';
import { Tokens } from './enums/tokens.ts';
import { defaultConfig } from './default-config.js';
import { dateTransformer } from './transformers/date-transformer.ts';
import { hoursTransformer } from './transformers/hours-transformer.ts';
import { millisecondsTransformer } from './transformers/milliseconds-transformer.ts';
import { minutesTransformer } from './transformers/minutes-transformer.ts';
import { monthTransformer } from './transformers/month-transformer.ts';
import { periodTransformer } from './transformers/period-transformer.ts';
import { secondsTransformer } from './transformers/seconds-transformer.ts';
import { weekdayTransformer } from './transformers/weekday-transformer.ts';
import { yearTransformer } from './transformers/year-transformer.ts';

type VueConstructor = {
  filter(id: string, definition?: Function): Function;
};

const tokenize = (format: string): string => {
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
};

const transform = (tokenized: string, input: Date, config: IDateFormatConfig): string => {
  if (tokenized.includes(Tokens.YYYY)) {
    tokenized = tokenized.replace(Tokens.YYYY, config.yearTransformer(input, YearFormats.YYYY, config));
  }
  if (tokenized.includes(Tokens.YY)) {
    tokenized = tokenized.replace(Tokens.YY, config.yearTransformer(input, YearFormats.YY, config));
  }

  if (tokenized.includes(Tokens.MMMM)) {
    tokenized = tokenized.replace(Tokens.MMMM, config.monthTransformer(input, MonthFormats.MMMM, config));
  }
  if (tokenized.includes(Tokens.MMM)) {
    tokenized = tokenized.replace(Tokens.MMM, config.monthTransformer(input, MonthFormats.MMM, config));
  }
  if (tokenized.includes(Tokens.MM)) {
    tokenized = tokenized.replace(Tokens.MM, config.monthTransformer(input, MonthFormats.MM, config));
  }
  if (tokenized.includes(Tokens.M)) {
    tokenized = tokenized.replace(Tokens.M, config.monthTransformer(input, MonthFormats.M, config));
  }

  if (tokenized.includes(Tokens.DD)) {
    tokenized = tokenized.replace(Tokens.DD, config.dateTransformer(input, DateFormats.DD, config));
  }
  if (tokenized.includes(Tokens.D)) {
    tokenized = tokenized.replace(Tokens.D, config.dateTransformer(input, DateFormats.D, config));
  }

  if (tokenized.includes(Tokens.HH)) {
    tokenized = tokenized.replace(Tokens.HH, config.hoursTransformer(input, HoursFormats.HH, config));
  }
  if (tokenized.includes(Tokens.H)) {
    tokenized = tokenized.replace(Tokens.H, config.hoursTransformer(input, HoursFormats.H, config));
  }
  if (tokenized.includes(Tokens.hh)) {
    tokenized = tokenized.replace(Tokens.hh, config.hoursTransformer(input, HoursFormats.hh, config));
  }
  if (tokenized.includes(Tokens.h)) {
    tokenized = tokenized.replace(Tokens.h, config.hoursTransformer(input, HoursFormats.h, config));
  }

  if (tokenized.includes(Tokens.mm)) {
    tokenized = tokenized.replace(Tokens.mm, config.minutesTransformer(input, MinutesFormats.mm, config));
  }
  if (tokenized.includes(Tokens.m)) {
    tokenized = tokenized.replace(Tokens.m, config.minutesTransformer(input, MinutesFormats.m, config));
  }

  if (tokenized.includes(Tokens.ss)) {
    tokenized = tokenized.replace(Tokens.ss, config.secondsTransformer(input, SecondsFormats.ss, config));
  }
  if (tokenized.includes(Tokens.s)) {
    tokenized = tokenized.replace(Tokens.s, config.secondsTransformer(input, SecondsFormats.s, config));
  }

  if (tokenized.includes(Tokens.A)) {
    tokenized = tokenized.replace(Tokens.A, config.periodTransformer(input, PeriodFormats.A, config));
  }
  if (tokenized.includes(Tokens.a)) {
    tokenized = tokenized.replace(Tokens.a, config.periodTransformer(input, PeriodFormats.a, config));
  }

  if (tokenized.includes(Tokens.dddd)) {
    tokenized = tokenized.replace(Tokens.dddd, config.weekdayTransformer(input, WeekdayFormats.dddd, config));
  }
  if (tokenized.includes(Tokens.dd)) {
    tokenized = tokenized.replace(Tokens.dd, config.weekdayTransformer(input, WeekdayFormats.dd, config));
  }
  if (tokenized.includes(Tokens.d)) {
    tokenized = tokenized.replace(Tokens.d, config.weekdayTransformer(input, WeekdayFormats.d, config));
  }

  if (tokenized.includes(Tokens.SSS)) {
    tokenized = tokenized.replace(Tokens.SSS, config.millisecondsTransformer(input, MillisecondsFormats.SSS, config));
  }
  if (tokenized.includes(Tokens.S)) {
    tokenized = tokenized.replace(Tokens.S, config.millisecondsTransformer(input, MillisecondsFormats.S, config));
  }

  return tokenized;
};

export const dateFormat = (input: Date, format = 'YYYY-MM-DD HH:mm:ss', config: IDateFormatConfig = {}): string => {
  config = {
    dateTransformer,
    hoursTransformer,
    millisecondsTransformer,
    minutesTransformer,
    monthTransformer,
    periodTransformer,
    secondsTransformer,
    weekdayTransformer,
    yearTransformer,
    ...defaultConfig,
    ...config
  };

  if ('timezone' in config) {
    input.setMinutes(input.getMinutes() + config.timezone);
  }

  return transform(tokenize(format), input, config);
};

export default {
  install(Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (input: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      return dateFormat(input, format, { ...baseConfig, ...config });
    });
  }
};
