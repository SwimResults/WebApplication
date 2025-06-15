import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';
import {OAuthModule} from "angular-oauth2-oidc";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [OAuthModule.forRoot()],
    providers: [
        JwtInterceptor,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}));

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
