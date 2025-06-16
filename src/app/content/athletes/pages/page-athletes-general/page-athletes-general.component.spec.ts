import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAthletesGeneralComponent} from './page-athletes-general.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {AthletesModule} from "../../athletes.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('PageAthletesGeneralComponent', () => {
    let component: PageAthletesGeneralComponent;
    let fixture: ComponentFixture<PageAthletesGeneralComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    imports: [ElementsModule,
        RouterTestingModule,
        AthletesModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot(), PageAthletesGeneralComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
