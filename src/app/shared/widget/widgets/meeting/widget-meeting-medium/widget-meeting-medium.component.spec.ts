import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetMeetingMediumComponent} from './widget-meeting-medium.component';
import {MatIconModule} from "@angular/material/icon";

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetMeetingMediumComponent', () => {
  let component: WidgetMeetingMediumComponent;
  let fixture: ComponentFixture<WidgetMeetingMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        MatIconModule, WidgetMeetingMediumComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
