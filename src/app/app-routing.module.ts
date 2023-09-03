import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Example1Component} from "./content/example";
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


const routes: Routes = [
  { path: '',                         component: Example1Component },
  { path: 'auth',                     component: AuthComponent },
  { path: 'account/profile',          component: UserProfileComponent },
  { path: 'dashboard',                component: PageDashboardGeneralComponent },
  { path: 'calendar',                 component: CalendarComponent },
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
      { path: 'athlete/id/:entity_id',component: PageAthleteComponent },
      { path: 'athlete/:entity_alias',component: PageAthleteComponent },
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
