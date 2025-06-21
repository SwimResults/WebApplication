import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOStartsSmallComponent} from './widget-n-o-starts-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetNOStartsSmallComponent', () => {
  let component: WidgetNOStartsSmallComponent;
  let fixture: ComponentFixture<WidgetNOStartsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            WidgetNOStartsSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOStartsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
