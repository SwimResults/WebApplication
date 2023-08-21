import { TestBed } from '@angular/core/testing';

import { StartService } from './start.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('StartService', () => {
  let service: StartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
