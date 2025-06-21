import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageLiveComponent} from './page-live.component';

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {OAuthModule} from "angular-oauth2-oidc";

describe('PageLiveComponent', () => {
    let component: PageLiveComponent;
    let fixture: ComponentFixture<PageLiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageLiveComponent,
                OAuthModule.forRoot()
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageLiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
