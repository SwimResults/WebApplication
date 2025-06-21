import { TestBed } from '@angular/core/testing';

import { EasyWkService } from './easy-wk.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('EasyWkService', () => {
  let service: EasyWkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(EasyWkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
