import {TestBed} from '@angular/core/testing';

import {RouteService} from './route.service';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../app.routes";

describe('RouteService', () => {
  let service: RouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
});
    service = TestBed.inject(RouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
