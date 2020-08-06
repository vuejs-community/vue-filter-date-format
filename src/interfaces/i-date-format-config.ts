export interface IDateFormatConfig {
  dayOfWeekNames?: string[];
  dayOfWeekNamesShort?: string[];
  monthNames?: string[];
  monthNamesShort?: string[];
  timezone?: number;

  dateTransformer?: Function;
  hoursTransformer?: Function;
  millisecondsTransformer?: Function;
  minutesTransformer?: Function;
  monthTransformer?: Function;
  periodTransformer?: Function;
  secondsTransformer?: Function;
  weekdayTransformer?: Function;
  yearTransformer?: Function;
}
