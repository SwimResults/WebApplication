import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetSponsorsMediumComponent} from './widget-sponsors-medium.component';
import {TranslateModule} from "@ngx-translate/core";

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetSponsorsMediumComponent', () => {
  let component: WidgetSponsorsMediumComponent;
  let fixture: ComponentFixture<WidgetSponsorsMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
        MatIconModule,
            WidgetSponsorsMediumComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSponsorsMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
