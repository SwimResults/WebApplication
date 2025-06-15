import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAthletesEventComponent} from './page-athletes-event.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {AthletesModule} from "../../athletes.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PageAthletesEventComponent', () => {
    let component: PageAthletesEventComponent;
    let fixture: ComponentFixture<PageAthletesEventComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [PageAthletesEventComponent],
    imports: [ElementsModule,
        RouterTestingModule,
        AthletesModule,
        TranslateModule.forRoot(),
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
            .compileComponents();

        fixture = TestBed.createComponent(PageAthletesEventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
