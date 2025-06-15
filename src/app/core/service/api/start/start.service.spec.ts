import { TestBed } from '@angular/core/testing';

import { StartService } from './start.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('StartService', () => {
  let service: StartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(StartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
