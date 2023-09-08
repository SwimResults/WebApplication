import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMeetingMediumComponent } from './widget-meeting-medium.component';

describe('WidgetMeetingMediumComponent', () => {
  let component: WidgetMeetingMediumComponent;
  let fixture: ComponentFixture<WidgetMeetingMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMeetingMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMeetingMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
