import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetMeetingLargeComponent} from './widget-meeting-large.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetMeetingLargeComponent', () => {
  let component: WidgetMeetingLargeComponent;
  let fixture: ComponentFixture<WidgetMeetingLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        MatIconModule,
        TranslateModule.forRoot(), WidgetMeetingLargeComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
