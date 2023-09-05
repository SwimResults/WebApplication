import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMeetingLargeComponent } from './widget-meeting-large.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('WidgetMeetingLargeComponent', () => {
  let component: WidgetMeetingLargeComponent;
  let fixture: ComponentFixture<WidgetMeetingLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMeetingLargeComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
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
