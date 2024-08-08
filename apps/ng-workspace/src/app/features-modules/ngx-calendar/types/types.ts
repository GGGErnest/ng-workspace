export enum MonthNames {
  'January' = 1,
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augost',
  'September',
  'Octuber',
  'November',
  'Dicember',
}

export enum WeekDay {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}

export type MonthName = typeof MonthNames;
export type DaysOfTheWeek = keyof typeof WeekDay;
export type DaysGroupedByWeekdays = {
  [key in keyof DaysOfTheWeek]: Date[];
};

export type CalendarMonthInWeeks = Date[][];

export type CalendarYear = Date[][][];
