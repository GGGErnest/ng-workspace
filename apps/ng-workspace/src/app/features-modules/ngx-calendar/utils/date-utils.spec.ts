import {
  WeekDay,
  generateDaysOfMonthPerWeek,
  getDayOfTheWeek,
} from './date-utils';

function matrixTraverser<T extends any[][]>(
  matrix: T,
  expectationOnRow: (row: T[]) => void,
  expectationOnCell: (cell: T) => void
): void {
  for (let index = 0; index < matrix.length; index++) {
    const row = matrix[index];
    expectationOnRow(row);
    for (let i = 0; i < row.length; i++) {
      expectationOnCell(row[i]);
    }
  }
}

describe('generateDaysOfMonthPerWeek', () => {
  const year = 2024;
  const month = 1;

  it('generates a 5x7 matrix of the days of the desired month', () => {
    const result = generateDaysOfMonthPerWeek(year, month);
    matrixTraverser(
      result,
      (row) => expect(row.length).toEqual(7),
      (cell) => expect(cell).toBeInstanceOf(Date)
    );
  });

  // Since there is no month that has 35 days could be that the first and last row of the matrix needs to be completed with days of previous and next month
  it('the first row of the matrix needs to contain at least the first day the desired month', () => {
    const result = generateDaysOfMonthPerWeek(year, month);
    const firstDay = new Date(year, month, 1);
    let firstDayFound = false;
    const targetRow = result[0];
    for (let i = 0; i < targetRow.length; i++) {
      const target = targetRow[i];
      if (target.getTime() === firstDay.getTime()) {
        firstDayFound = true;
        break;
      }
    }

    expect(firstDayFound).toBeTrue();
  });

  // Since there is no month that has 35 days could be that the first and last row of the matrix needs to be completed with days of previous and next month
  it('the last row of the matrix needs to contain the last day of the desired month', () => {
    const result = generateDaysOfMonthPerWeek(year, month);
    const targetRow = result[4];
    const lastDay = new Date(year, month, 31);
    let lastDayFound = false;
    for (let i = 0; i < targetRow.length; i++) {
      const target = targetRow[i];
      if (target.getTime() === lastDay.getTime()) {
        lastDayFound = true;
        break;
      }
    }

    expect(lastDayFound).toBeTrue();
  });

  it('days must be in they right weekday day in the matrix', () => {
    // generate test days
    const days = [];
    for (let i = 0; i < 14; i++) {
      days.push(new Date(year, month, i));
    }

    const result = generateDaysOfMonthPerWeek(year, month);
    const startFrom = WeekDay[getDayOfTheWeek(days[0])];
    let row = 0;
    let daysPointer = 0;
    for (let i = startFrom; i < result[row].length; i++, daysPointer++) {
      const targetRow = result[row];
      expect(getDayOfTheWeek(targetRow[i])).toEqual(
        getDayOfTheWeek(days[daysPointer])
      );
      // changing rows in the matrix
      if (i % 7 === 0) {
        i = 0;
        row += 1;
      }
    }
  });
});
