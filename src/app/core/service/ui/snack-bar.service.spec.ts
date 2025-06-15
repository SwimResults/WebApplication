import {TestBed} from '@angular/core/testing';

import {SnackBarService} from './snack-bar.service';
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('SnackBarService', () => {
    let service: SnackBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot()
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        });
        service = TestBed.inject(SnackBarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
