import { TestBed } from '@angular/core/testing';

import { HeatService } from './heat.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeatService', () => {
  let service: HeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
