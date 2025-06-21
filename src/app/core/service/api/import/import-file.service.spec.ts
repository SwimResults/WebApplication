import { TestBed } from '@angular/core/testing';

import { ImportFileService } from './import-file.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ImportFileService', () => {
  let service: ImportFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ImportFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
