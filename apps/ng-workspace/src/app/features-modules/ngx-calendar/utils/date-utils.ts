import { CalendarYear, MonthName } from '../types/types';

enum WeekDay {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}

type DaysOfTheWeek = keyof typeof WeekDay;

export function generateYearsBetween(
  start: Date,
  end: Date = new Date()
): Date[] {
  const years: Date[] = [];
  const yearsToGenerate = end.getFullYear() - start.getFullYear();
  years.push(new Date(start.getFullYear(), start.getMonth(), start.getDate()));

  for (let i = 1; i <= yearsToGenerate; i++) {
    years.push(
      new Date(
        years[i - 1].getFullYear() + 1,
        start.getMonth(),
        start.getDate()
      )
    );
  }
  return years;
}

export function getDaysOfAMonth(month: number): number {
  return new Date(new Date().getFullYear(), month, 0).getDate();
}

export function generateDaysOfMonthPerWeek(
  year: number,
  monthIndex: number
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

export function generateCalendarYear(year: Date): CalendarYear {
  const daysInMonths: CalendarYear = [];
  for (let i = 0; i < 12; i++) {
    daysInMonths[i] = generateDaysOfMonthPerWeek(year.getFullYear(), i);
  }

  console.log(daysInMonths);
  return daysInMonths;
}

export function getDayOfTheWeek(day: Date, locale = 'default'): DaysOfTheWeek {
  return day.toLocaleDateString(locale, { weekday: 'long' }) as DaysOfTheWeek;
}

export function getMonthName(day: Date, local = 'default'): string {
  return day.toLocaleString(local, {
    month: 'long',
  });
}

export function addYear(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
