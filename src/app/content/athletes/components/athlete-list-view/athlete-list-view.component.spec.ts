import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AthleteListViewComponent} from './athlete-list-view.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('AthleteListViewComponent', () => {
    let component: AthleteListViewComponent;
    let fixture: ComponentFixture<AthleteListViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
        TranslateModule.forRoot(),
        OAuthModule.forRoot(), AthleteListViewComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
            .compileComponents();

        fixture = TestBed.createComponent(AthleteListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
