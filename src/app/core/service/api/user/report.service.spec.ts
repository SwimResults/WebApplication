import {TestBed} from '@angular/core/testing';

import {ReportService} from './report.service';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('ReportService', () => {
    let service: ReportService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        });
        service = TestBed.inject(ReportService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
