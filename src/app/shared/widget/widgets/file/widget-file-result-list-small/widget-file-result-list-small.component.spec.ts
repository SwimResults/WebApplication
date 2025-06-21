import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFileResultListSmallComponent} from './widget-file-result-list-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetFileResultListSmallComponent', () => {
  let component: WidgetFileResultListSmallComponent;
  let fixture: ComponentFixture<WidgetFileResultListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            WidgetFileResultListSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileResultListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
