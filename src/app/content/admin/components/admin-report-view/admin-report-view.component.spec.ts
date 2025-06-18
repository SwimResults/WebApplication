import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminReportViewComponent} from './admin-report-view.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('AdminReportViewComponent', () => {
    let component: AdminReportViewComponent;
    let fixture: ComponentFixture<AdminReportViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminReportViewComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AdminReportViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
