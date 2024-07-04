import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  public currentUrlPath = signal<string[]>([]);
  private _router = inject(Router);

  constructor() {
    this._router.events
      .pipe(
        takeUntilDestroyed(),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            const segments = event.url.split('/').filter((item) => item !== '');
            this.currentUrlPath.set(segments);
          }
        }),
      )
      .subscribe();
  }
}
