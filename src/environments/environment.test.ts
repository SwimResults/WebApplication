// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environment: 'testing',
  env_color: "#149d00",
  api_urls: {
    athlete_service: "https://api-dev.swimresults.de/athlete/v1/",
    start_service: "https://api-dev.swimresults.de/start/v1/",
    import_service: "https://api-dev.swimresults.de/import/v1/",
    user_service: "https://api-dev.swimresults.de/user/v1/",
    meeting_service: "https://api-dev.swimresults.de/meeting/v1/"
  },
  o_auth_issuer: "https://auth.swimresults.de/realms/swimresults"
}
