import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
