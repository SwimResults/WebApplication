import { TestBed } from '@angular/core/testing';

import { AthleteService } from './athlete.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AthleteService', () => {
  let service: AthleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(AthleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
