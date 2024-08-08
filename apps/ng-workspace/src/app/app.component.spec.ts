import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BreadcrumbsService } from './services/breadcrumbs.service';
import { NgIf, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  RouterOutlet,
  RouterModule,
  ActivatedRoute,
  Router,
  provideRouter,
} from '@angular/router';
import { BreadcumbsBarComponent } from './components/dumb/breadcumbs-bar/breadcumbs-bar.component';
import { NavbarComponent } from './components/dumb/navbar/navbar.component';
import { HomeComponent } from './components/routes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        BrowserAnimationsModule,
      ],
      providers: [
        BreadcrumbsService,
        provideRouter([{ path: 'home', component: HomeComponent }]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ng-workspace' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-workspace');
  });
});
