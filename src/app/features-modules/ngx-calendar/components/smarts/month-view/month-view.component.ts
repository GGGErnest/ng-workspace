import { NgFor, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { generateDaysOfMonthPerWeek } from '../../../utils/date-utils';
import { DayComponent } from '../../dumbs/day/day.component';

@Component({
  selector: 'month-view',
  standalone: true,
  imports: [NgFor, NgStyle, DayComponent],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.scss',
})
export class MonthViewComponent {
  startDate = signal<Date>(new Date());
  monthDaysByWeek = signal(
    generateDaysOfMonthPerWeek(
      this.startDate().getFullYear(),
      this.startDate().getMonth(),
    ),
  );

  constructor() {}
}
