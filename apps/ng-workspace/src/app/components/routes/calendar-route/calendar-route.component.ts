import { Component } from '@angular/core';
import { CalendarComponent } from '../../smarts/calendar/calendar.component';

@Component({
  selector: 'app-calendar-route',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './calendar-route.component.html',
  styleUrl: './calendar-route.component.scss',
})
export class CalendarRouteComponent {}
