import { TestBed } from '@angular/core/testing';

import { MeetingService } from './meeting.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MeetingService', () => {
  let service: MeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(MeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
