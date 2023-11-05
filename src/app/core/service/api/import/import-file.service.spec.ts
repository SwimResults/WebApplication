import { TestBed } from '@angular/core/testing';

import { ImportFileService } from './import-file.service';

describe('ImportFileService', () => {
  let service: ImportFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
