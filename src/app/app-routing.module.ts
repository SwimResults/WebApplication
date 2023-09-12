import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./content/calendar/calendar.component";
import {PageLiveComponent} from "./content/live";
import {PageFilesComponent} from "./content/files";
import {PageDashboardEventComponent, PageDashboardGeneralComponent} from "./content/dashboard";
import {PageAthleteComponent, PageAthletesEventComponent, PageAthletesGeneralComponent} from "./content/athletes";
import {PageTeamComponent, PageTeamsEventComponent, PageTeamsGeneralComponent} from "./content/teams";
import {PageStatsEventComponent, PageStatsGeneralComponent} from "./content/stats";
import {PageEventComponent, PageEventsComponent} from "./content/events";
import {AuthComponent} from "./content/auth/auth.component";
import {UserProfileComponent} from "./content/account";
import {PageMeetingsComponent} from "./content/meetings";


const routes: Routes = [
  { path: '',                         component: PageMeetingsComponent, pathMatch: "full" },
  { path: 'auth',                     component: AuthComponent },
  { path: 'account/profile',          component: UserProfileComponent },
  { path: 'dashboard',                component: PageDashboardGeneralComponent },
  { path: 'calendar',                 component: CalendarComponent },
  { path: 'meetings',                 redirectTo: '/meetings' },
  { path: 'athlete',                  component: PageAthletesGeneralComponent },
  { path: 'athlete/:entity_id',       component: PageAthleteComponent },
  { path: 'team',                     component: PageTeamsGeneralComponent },
  { path: 'team/:entity_id',          component: PageTeamComponent },
  { path: 'stats',                    component: PageStatsGeneralComponent },
  {
    path: 'm/:event',
    children: [
      { path: "",                     component: PageDashboardEventComponent },
      { path: "dashboard",            component: PageDashboardEventComponent },
      { path: "live",                 component: PageLiveComponent },
      { path: "event",                component: PageEventsComponent },
      { path: "event/:event_number",  component: PageEventComponent },
      { path: "athlete",              component: PageAthletesEventComponent },
      { path: 'athlete/:entity_id',component: PageAthleteComponent },
      { path: "team",                 component: PageTeamsEventComponent },
      { path: 'team/:entity_id',      component: PageTeamComponent },
      { path: "files",                component: PageFilesComponent },
      { path: "stats",                component: PageStatsEventComponent },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
