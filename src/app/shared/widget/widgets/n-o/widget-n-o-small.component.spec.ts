import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOSmallComponent} from './widget-n-o-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('WidgetNOSmallComponent', () => {
  let component: WidgetNOSmallComponent;
  let fixture: ComponentFixture<WidgetNOSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
        MatIconModule,
            WidgetNOSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
