import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AthleteListViewComponent} from './athlete-list-view.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {AthletesModule} from "../../athletes.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AthleteListViewComponent', () => {
    let component: AthleteListViewComponent;
    let fixture: ComponentFixture<AthleteListViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [AthleteListViewComponent],
    imports: [AthletesModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
        OAuthModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
