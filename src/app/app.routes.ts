import { Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { PageNotFoundComponent } from './components/routes/page-not-found/page-not-found.component';
import { CalendarRouteComponent } from './components/routes/calendar-route/calendar-route.component';

export const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarRouteComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
