import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFileStartListSmallComponent} from './widget-file-start-list-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetFileStartListSmallComponent', () => {
  let component: WidgetFileStartListSmallComponent;
  let fixture: ComponentFixture<WidgetFileStartListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            WidgetFileStartListSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileStartListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
