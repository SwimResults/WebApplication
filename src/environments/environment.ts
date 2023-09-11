// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environment: 'development',
  api_urls: {
    // athlete_service: "https://api.swimresults.de/athlete/v1/",
    // start_service: "https://api.swimresults.de/start/v1/",
    // import_service: "https://api.swimresults.de/import/v1/",
    // user_service: "https://api.swimresults.de/user/v1/",
    // meeting_service: "https://api.swimresults.de/meeting/v1/",
    meeting_service: "http://localhost:8089/",
    athlete_service: "http://localhost:8086/",
    start_service: "http://localhost:8087/",
    user_service: "http://localhost:8090/",
  },
  o_auth_issuer: "http://localhost:8080/realms/master"
}
