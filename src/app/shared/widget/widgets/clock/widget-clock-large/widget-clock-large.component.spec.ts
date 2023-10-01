import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetClockLargeComponent } from './widget-clock-large.component';

describe('WidgetClockLargeComponent', () => {
  let component: WidgetClockLargeComponent;
  let fixture: ComponentFixture<WidgetClockLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetClockLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetClockLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
