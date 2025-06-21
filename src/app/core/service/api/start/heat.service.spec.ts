import { TestBed } from '@angular/core/testing';

import { HeatService } from './heat.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HeatService', () => {
  let service: HeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(HeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
