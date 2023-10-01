import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetClockSmallComponent } from './widget-clock-small.component';

describe('WidgetClockSmallComponent', () => {
  let component: WidgetClockSmallComponent;
  let fixture: ComponentFixture<WidgetClockSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetClockSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetClockSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
