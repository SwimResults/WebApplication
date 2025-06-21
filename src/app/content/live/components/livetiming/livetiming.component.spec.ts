import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LivetimingComponent} from './livetiming.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {OAuthModule} from "angular-oauth2-oidc";

describe('LivetimingComponent', () => {
    let component: LivetimingComponent;
    let fixture: ComponentFixture<LivetimingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                LivetimingComponent,
                OAuthModule.forRoot()
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LivetimingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
