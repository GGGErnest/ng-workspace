import { Component, input, output, signal } from '@angular/core';
import { generateYearsBetween } from '../../../utils/date-utils';
import { NgFor } from '@angular/common';

@Component({
  selector: 'years',
  standalone: true,
  imports: [NgFor],
  templateUrl: './years.component.html',
  styleUrl: './years.component.scss',
})
export class YearsComponent {
  public startDate = input<number | Date>(1970);
  public endDate = input<number | Date>(new Date());
  public years = signal(generateYearsBetween(this.startDate(), this.endDate()));
  public yearClicked = output<number>();

  public onYearClicked(year: number): void {
    this.yearClicked.emit(year);
  }
}
