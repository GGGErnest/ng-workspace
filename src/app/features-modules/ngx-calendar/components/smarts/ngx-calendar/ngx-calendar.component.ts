import { NgClass, NgIf, NgSwitch } from '@angular/common';
import { Component, input } from '@angular/core';
import { MonthsComponent } from '../../dumbs/months/months.component';
import { YearViewComponent } from '../year-view/year-view.component';
import { MonthViewComponent } from '../month-view/month-view.component';
import { WeekViewComponent } from '../week-view/week-view.component';
import { DayViewComponent } from '../day-view/day-view.component';

type ViewTypes = 'year' | 'month' | 'day' | 'week';

@Component({
  selector: 'ngx-calendar',
  standalone: true,
  imports: [
    YearViewComponent,
    MonthViewComponent,
    WeekViewComponent,
    DayViewComponent,
    NgIf,
    MonthsComponent,
    NgSwitch,
    NgClass,
  ],
  templateUrl: './ngx-calendar.component.html',
  styleUrl: './ngx-calendar.component.scss',
})
export class NgxCalendarComponent {
  public headerLeftTitle = '';
  public startDate = input<Date>(new Date(1970, 1, 1));
  public endDate = input<Date>(new Date());
  public currentView: ViewTypes = 'month';

  onCurrentViewClick(): void {}
  onYearClicked(year: number): void {
    this.changeView('month');
  }

  private changeView(viewToChange: ViewTypes): void {
    this.currentView = viewToChange;
  }
}
