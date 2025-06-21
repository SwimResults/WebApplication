import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFavoritesComponent} from './widget-favorites.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetFavoritesComponent', () => {
    let component: WidgetFavoritesComponent;
    let fixture: ComponentFixture<WidgetFavoritesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
        TranslateModule.forRoot(),
        OAuthModule.forRoot(), WidgetFavoritesComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
            .compileComponents();

        fixture = TestBed.createComponent(WidgetFavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
