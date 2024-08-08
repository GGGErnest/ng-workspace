import { Component, input, output, signal } from '@angular/core';
import { generateYearsBetween } from '../../../utils/date-utils';
import { NgFor } from '@angular/common';
import { MonthsComponent } from '../months/months.component';

@Component({
  selector: 'years',
  standalone: true,
  imports: [NgFor, MonthsComponent],
  templateUrl: './years.component.html',
  styleUrl: './years.component.scss',
})
export class YearsComponent {
  public startDate = input<Date>(new Date(1970));
  public endDate = input<Date>(new Date());
  public years = signal(generateYearsBetween(this.startDate(), this.endDate()));
  public yearClicked = output<Date>();
  public selectedYear = input<Date>(new Date());

  public onYearClicked(year: Date): void {
    this.yearClicked.emit(year);
  }
}
