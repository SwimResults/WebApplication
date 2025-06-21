import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageDashboardSpeakerComponent} from './page-dashboard-speaker.component';

import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {OAuthModule} from "angular-oauth2-oidc";

describe('PageDashboardSpeakerComponent', () => {
    let component: PageDashboardSpeakerComponent;
    let fixture: ComponentFixture<PageDashboardSpeakerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageDashboardSpeakerComponent,
                OAuthModule.forRoot()
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageDashboardSpeakerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
