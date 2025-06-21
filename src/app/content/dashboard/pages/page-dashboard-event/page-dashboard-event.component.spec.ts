import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageDashboardEventComponent} from './page-dashboard-event.component';

import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PageDashboardEventComponent', () => {
    let component: PageDashboardEventComponent;
    let fixture: ComponentFixture<PageDashboardEventComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                OAuthModule.forRoot(),
                PageDashboardEventComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageDashboardEventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
