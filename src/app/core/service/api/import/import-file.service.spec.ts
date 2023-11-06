import { TestBed } from '@angular/core/testing';

import { ImportFileService } from './import-file.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ImportFileService', () => {
  let service: ImportFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ImportFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
