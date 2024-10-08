import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthViewComponent } from './month-view.component';

describe('MonthViewComponent', () => {
  let component: MonthViewComponent;
  let fixture: ComponentFixture<MonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
