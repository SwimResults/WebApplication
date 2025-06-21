import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAthletesGeneralComponent} from './page-athletes-general.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('PageAthletesGeneralComponent', () => {
    let component: PageAthletesGeneralComponent;
    let fixture: ComponentFixture<PageAthletesGeneralComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
        TranslateModule.forRoot(),
        OAuthModule.forRoot(), PageAthletesGeneralComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
            .compileComponents();

        fixture = TestBed.createComponent(PageAthletesGeneralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
