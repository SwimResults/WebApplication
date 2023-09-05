import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMeetingLargeComponent } from './widget-meeting-large.component';

describe('WidgetMeetingLargeComponent', () => {
  let component: WidgetMeetingLargeComponent;
  let fixture: ComponentFixture<WidgetMeetingLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMeetingLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMeetingLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
