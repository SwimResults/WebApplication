import { TestBed } from '@angular/core/testing';

import { RouteService } from './route.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('RouteService', () => {
  let service: RouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(RouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
