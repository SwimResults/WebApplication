import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetMapMediumComponent} from './widget-map-medium.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetMapMediumComponent', () => {
  let component: WidgetMapMediumComponent;
  let fixture: ComponentFixture<WidgetMapMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetMapMediumComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMapMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
