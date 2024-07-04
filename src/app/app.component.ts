import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/dumb/navbar/navbar.component';
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { BreadcumbsBarComponent } from './components/dumb/breadcumbs-bar/breadcumbs-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    NavbarComponent,
    MatIconModule,
    RouterModule,
    MatSidenavModule,
    NgIf,
    NgFor,
    BreadcumbsBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-workspace';

  public breadcumbs = inject(BreadcrumbsService).currentUrlPath;

  trackBy(element: string) {
    return element;
  }

  constructor() {}
}
