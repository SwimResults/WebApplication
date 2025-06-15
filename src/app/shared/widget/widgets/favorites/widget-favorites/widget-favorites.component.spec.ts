import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFavoritesComponent} from './widget-favorites.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetFavoritesComponent', () => {
    let component: WidgetFavoritesComponent;
    let fixture: ComponentFixture<WidgetFavoritesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [WidgetFavoritesComponent],
    imports: [RouterTestingModule,
        WidgetModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
