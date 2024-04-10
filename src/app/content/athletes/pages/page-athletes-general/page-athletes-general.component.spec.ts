import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAthletesGeneralComponent} from './page-athletes-general.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AthletesModule} from "../../athletes.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";

describe('PageAthletesGeneralComponent', () => {
    let component: PageAthletesGeneralComponent;
    let fixture: ComponentFixture<PageAthletesGeneralComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageAthletesGeneralComponent],
            imports: [
                ElementsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                AthletesModule,
                TranslateModule.forRoot(),
                OAuthModule.forRoot()

            ]
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
