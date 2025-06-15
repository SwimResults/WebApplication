import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private oAuthService: OAuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this.oAuthService.hasValidIdToken()) {
      return next.handle(request);
    }

    if (request.url.includes("api.swimresults.de") || request.url.includes("api-dev.swimresults.de") || request.url.includes("localhost:8090")) {
      const modifiedReq = request.clone({
        //headers: request.headers.set('Authorization', `Bearer ${userToken}`),
        headers: request.headers.set('Authorization', this.oAuthService.authorizationHeader()),
      });

      return next.handle(modifiedReq);
    }

    return next.handle(request);

  }
}
