import { NgFor } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { generateCalendarYear, getMonthName } from '../../../utils/date-utils';

@Component({
  selector: 'months',
  standalone: true,
  imports: [NgFor],
  templateUrl: './months.component.html',
  styleUrl: './months.component.scss',
})
export class MonthsComponent {
  public year = input(new Date());
  public calendarYear = computed(() => generateCalendarYear(this.year()));
  public calendarYearKeys = computed(() => Object.keys(this.calendarYear()));
  public getMonth(month: number): string {
    return getMonthName(new Date(this.year().getFullYear(), month));
  }
}
