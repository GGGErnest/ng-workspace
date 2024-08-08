import { Component, input } from '@angular/core';

@Component({
  selector: 'day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
})
export class DayComponent {
  day = input.required<Date>();
}
