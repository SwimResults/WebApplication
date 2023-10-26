import { TestBed } from '@angular/core/testing';

import { EasyWkService } from './easy-wk.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EasyWkService', () => {
  let service: EasyWkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EasyWkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
