export const MONTHS_NAMES: MonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augost',
  'September',
  'Octuber',
  'Dicember',
  'November',
];

export enum Month {
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

export type MonthName = keyof typeof Month;
export type DaysOfTheWeek = keyof typeof WeekDay;
export type DaysGroupedByWeekdays = {
  [key in keyof DaysOfTheWeek]: Date[];
};

export function generateYearsBetween(
  start: number | Date = 1970,
  end: number | Date = new Date(),
): number[] {
  const endDate = typeof end === 'number' ? end : end.getFullYear();
  let startDate = typeof start === 'number' ? start : start.getFullYear();
  let years = [];

  for (var i = startDate; i <= endDate; i++) {
    years.push(startDate);
    startDate++;
  }
  return years;
}

export function getDaysOfAMonth(month: number): number {
  return new Date(new Date().getFullYear(), month, 0).getDate();
}

export function generateDaysOfMonthPerWeek(
  year: number,
  monthIndex: number,
): Date[][] {
  const daysIn5Week = 35;
  const generatedDays: Date[][] = [];
  let currentRow = 0;
  const monthStartInWeekDay =
    WeekDay[getDayOfTheWeek(new Date(year, monthIndex, 1))];
  let startDay = 0;

  if (monthStartInWeekDay !== 0) {
    startDay = -monthStartInWeekDay + 1;
  }
  let countOfGeneratedDays = 1;

  for (
    let i = startDay;
    countOfGeneratedDays <= daysIn5Week;
    i++, countOfGeneratedDays++
  ) {
    if (!generatedDays[currentRow]) {
      generatedDays[currentRow] = [];
    }

    const currentDay = new Date(year, monthIndex, i);
    generatedDays[currentRow].push(currentDay);

    if (generatedDays[currentRow].length === 7) {
      currentRow++;
    }
  }

  return generatedDays;
}

export function generateDaysOfWeek() {}

export function getDayOfTheWeek(day: Date, locale = 'default'): DaysOfTheWeek {
  return day.toLocaleDateString(locale, { weekday: 'long' }) as DaysOfTheWeek;
}

export function groupDateByWeek(
  dates: Date[],
): DaysGroupedByWeekdays | undefined {
  return;
}
