import { TestBed } from '@angular/core/testing';

import { EasywkService } from './easy-wk.service';

describe('EasywkService', () => {
  let service: EasywkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasywkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
