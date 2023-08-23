import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://auth.swimresults.de/realms/swimresults",
  redirectUri: window.location.origin + "/auth",
  clientId: 'swimresults-pkce-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid profile offline_access',
  showDebugInformation: true
}
