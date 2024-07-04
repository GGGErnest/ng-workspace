import { Component } from '@angular/core';
import { NgxCalendarComponent } from '../../../features-modules/ngx-calendar/components/smarts/ngx-calendar/ngx-calendar.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgxCalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
