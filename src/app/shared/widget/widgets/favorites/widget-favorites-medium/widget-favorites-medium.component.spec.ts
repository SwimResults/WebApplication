import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFavoritesMediumComponent} from './widget-favorites-medium.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetFavoritesMediumComponent', () => {
    let component: WidgetFavoritesMediumComponent;
    let fixture: ComponentFixture<WidgetFavoritesMediumComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                OAuthModule.forRoot(), WidgetFavoritesMediumComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WidgetFavoritesMediumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
