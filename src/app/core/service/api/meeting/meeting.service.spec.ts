import { TestBed } from '@angular/core/testing';

import { MeetingService } from './meeting.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MeetingService', () => {
  let service: MeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
