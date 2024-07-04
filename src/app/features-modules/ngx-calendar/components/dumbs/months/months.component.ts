import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MONTHS_NAMES, MonthName } from '../../../utils/date-utils';

@Component({
  selector: 'months',
  standalone: true,
  imports: [NgFor],
  templateUrl: './months.component.html',
  styleUrl: './months.component.scss',
})
export class MonthsComponent {
  public months: MonthName[] = MONTHS_NAMES;
}
