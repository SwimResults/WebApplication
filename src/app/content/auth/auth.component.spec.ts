import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthComponent} from './auth.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {ElementsModule} from "../../shared/elements/elements.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OAuthModule.forRoot(),
        ElementsModule, AuthComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
