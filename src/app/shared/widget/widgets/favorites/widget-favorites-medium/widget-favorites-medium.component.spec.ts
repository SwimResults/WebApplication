import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFavoritesMediumComponent} from './widget-favorites-medium.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetFavoritesMediumComponent', () => {
    let component: WidgetFavoritesMediumComponent;
    let fixture: ComponentFixture<WidgetFavoritesMediumComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [WidgetFavoritesMediumComponent],
    imports: [RouterTestingModule,
        WidgetModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
