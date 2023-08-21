import { TestBed } from '@angular/core/testing';

import { AthleteService } from './athlete.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AthleteService', () => {
  let service: AthleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AthleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
