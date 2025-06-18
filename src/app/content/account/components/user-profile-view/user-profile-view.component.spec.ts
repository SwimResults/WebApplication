import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserProfileViewComponent} from './user-profile-view.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('UserProfileViewComponent', () => {
    let component: UserProfileViewComponent;
    let fixture: ComponentFixture<UserProfileViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OAuthModule.forRoot(),
                TranslateModule.forRoot(), UserProfileViewComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UserProfileViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
