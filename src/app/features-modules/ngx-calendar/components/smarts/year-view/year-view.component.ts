import { Component, input, output, signal } from '@angular/core';
import { generateYearsBetween } from '../../../utils/date-utils';
import { YearsComponent } from '../../dumbs/years/years.component';

@Component({
  selector: 'year-view',
  standalone: true,
  imports: [YearsComponent],
  templateUrl: './year-view.component.html',
  styleUrl: './year-view.component.scss',
})
export class YearViewComponent {
  public startDate = input<number | Date>(1970);
  public endDate = input<number | Date>(new Date());
  public years = signal(generateYearsBetween(this.startDate(), this.endDate()));
  public yearClicked = output<number>();

  public onYearClicked(year: number): void {
    this.yearClicked.emit(year);
  }
}
