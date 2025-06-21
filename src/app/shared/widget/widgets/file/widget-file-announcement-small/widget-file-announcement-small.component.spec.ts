import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFileAnnouncementSmallComponent} from './widget-file-announcement-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetFileAnnouncementSmallComponent', () => {
  let component: WidgetFileAnnouncementSmallComponent;
  let fixture: ComponentFixture<WidgetFileAnnouncementSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            WidgetFileAnnouncementSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileAnnouncementSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
