import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "./shared/elements/elements.module";
import {LayoutModule} from "./shared/layout/layout.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [
        AppComponent
    ],
    imports: [RouterTestingModule,
        ElementsModule,
        LayoutModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'swimresults'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('swimresults');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    });
});
