import {AuthConfig} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";

export const authConfig: AuthConfig = {
  issuer: environment.o_auth_issuer,
  redirectUri: "/auth",
  clientId: 'swimresults-pkce-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid profile offline_access',
  showDebugInformation: true,
  postLogoutRedirectUri: "/auth/logout"
}
