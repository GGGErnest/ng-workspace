import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'breadcumbs-bar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './breadcumbs-bar.component.html',
  styleUrl: './breadcumbs-bar.component.scss',
})
export class BreadcumbsBarComponent {
  breadcumbs = input.required<string[]>();
}
