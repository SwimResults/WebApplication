import {Routes} from '@angular/router';
import {CalendarComponent} from "./content/calendar/calendar.component";
import {PageLiveComponent} from "./content/live";
import {PageFilesComponent} from "./content/files";
import {
    PageDashboardEventComponent,
    PageDashboardGeneralComponent,
    PageDashboardSpeakerComponent
} from "./content/dashboard";
import {PageAthleteComponent, PageAthletesEventComponent, PageAthletesGeneralComponent} from "./content/athletes";
import {PageTeamComponent, PageTeamsEventComponent, PageTeamsGeneralComponent} from "./content/teams";
import {PageStatsEventComponent, PageStatsGeneralComponent} from "./content/stats";
import {PageEventComponent, PageEventsComponent} from "./content/events";
import {AuthComponent} from "./content/auth/auth.component";
import {PageUserSettingsComponent, UserProfileComponent} from "./content/account";
import {PageMeetingsComponent} from "./content/meetings";
import {LogoutComponent} from "./content/auth/logout/logout.component";
import {PageAdminEventComponent} from "./content/admin";
import {
    PageAdminNotificationComponent
} from "./content/admin/pages/page-admin-notification/page-admin-notification.component";


export const routes: Routes = [
  { path: '',                         component: PageMeetingsComponent, pathMatch: "full" },
  { path: 'auth',                     component: AuthComponent },
  { path: 'auth/logout',              component: LogoutComponent },
  { path: 'account/profile',          component: UserProfileComponent },
  { path: 'account/settings',         component: PageUserSettingsComponent },
  { path: 'dashboard',                component: PageDashboardGeneralComponent },
  { path: 'calendar',                 component: CalendarComponent },
  { path: 'meetings',                 redirectTo: '/' },
  { path: 'athlete',                  component: PageAthletesGeneralComponent },
  { path: 'athlete/:entity_id',       component: PageAthleteComponent },
  { path: 'team',                     component: PageTeamsGeneralComponent },
  { path: 'team/:entity_id',          component: PageTeamComponent },
  { path: 'stats',                    component: PageStatsGeneralComponent },
  {
    path: 'm/:event',
    children: [
      { path: "",                     redirectTo: 'dashboard', pathMatch: "full" },
      { path: "dashboard",            component: PageDashboardEventComponent },
      { path: "live",                 component: PageLiveComponent },
      { path: "event",                component: PageEventsComponent },
      { path: "event/:event_number",  component: PageEventComponent },
      { path: "athlete",              component: PageAthletesEventComponent },
      { path: 'athlete/:entity_id',   component: PageAthleteComponent },
      { path: "team",                 component: PageTeamsEventComponent },
      { path: 'team/:entity_id',      component: PageTeamComponent },
      { path: "files",                component: PageFilesComponent },
      { path: "speaker",              component: PageDashboardSpeakerComponent },
      { path: "stats",                component: PageStatsEventComponent },
      { path: "admin/event",          component: PageAdminEventComponent },
      { path: "admin/notification",   component: PageAdminNotificationComponent },
    ]
  }
]
