import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOHeatsSmallComponent} from './widget-n-o-heats-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetNOHeatsSmallComponent', () => {
  let component: WidgetNOHeatsSmallComponent;
  let fixture: ComponentFixture<WidgetNOHeatsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            WidgetNOHeatsSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOHeatsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
