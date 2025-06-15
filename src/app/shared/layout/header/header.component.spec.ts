import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {ElementsModule} from "../../elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {LayoutModule} from "../layout.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [HeaderComponent],
    imports: [ElementsModule,
        RouterTestingModule,
        LayoutModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
