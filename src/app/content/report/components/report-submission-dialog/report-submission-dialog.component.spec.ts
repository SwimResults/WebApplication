import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportSubmissionDialogComponent} from './report-submission-dialog.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {OAuthModule} from "angular-oauth2-oidc";

describe('ReportSubmissionDialogComponent', () => {
    let component: ReportSubmissionDialogComponent;
    let fixture: ComponentFixture<ReportSubmissionDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReportSubmissionDialogComponent,
                TranslateModule.forRoot(),
                OAuthModule.forRoot(),
                MatDialogModule
            ],
            providers: [
                {provide: MAT_DIALOG_DATA, useValue: {}},
                {provide: MatDialogRef, useValue: {}},
                provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ReportSubmissionDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
