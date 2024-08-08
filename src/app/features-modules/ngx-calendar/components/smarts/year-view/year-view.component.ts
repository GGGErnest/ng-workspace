import { Component, input, output, signal } from '@angular/core';
import { addYear, generateYearsBetween } from '../../../utils/date-utils';
import { YearsComponent } from '../../dumbs/years/years.component';
import { MonthsComponent } from '../../dumbs/months/months.component';

@Component({
  selector: 'year-view',
  standalone: true,
  imports: [YearsComponent, MonthsComponent],
  templateUrl: './year-view.component.html',
  styleUrl: './year-view.component.scss',
})
export class YearViewComponent {
  public startDate = input<Date>(new Date());
  public endDate = input<Date>(addYear(this.startDate()));
  public years = signal(generateYearsBetween(this.startDate(), this.endDate()));
  public currentYear = this.startDate();
}
