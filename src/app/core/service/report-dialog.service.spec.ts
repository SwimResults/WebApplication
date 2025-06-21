import {TestBed} from '@angular/core/testing';

import {ReportDialogService} from './report-dialog.service';

describe('ReportDialogService', () => {
    let service: ReportDialogService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReportDialogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
