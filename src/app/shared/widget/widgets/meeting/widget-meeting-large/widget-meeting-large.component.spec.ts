import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetMeetingLargeComponent} from './widget-meeting-large.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetMeetingLargeComponent', () => {
  let component: WidgetMeetingLargeComponent;
  let fixture: ComponentFixture<WidgetMeetingLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        MatIconModule,
        TranslateModule.forRoot(), WidgetMeetingLargeComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
