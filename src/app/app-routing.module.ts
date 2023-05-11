import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Example1Component} from "./content/example";
import {CalendarComponent} from "./content/calendar/calendar.component";
import {PageLiveComponent} from "./content/live";
import {PageFilesComponent} from "./content/files";
import {PageDashboardEventComponent, PageDashboardGeneralComponent} from "./content/dashboard";
import {PageAthletesEventComponent, PageAthletesGeneralComponent} from "./content/athletes";
import {PageTeamsEventComponent, PageTeamsGeneralComponent} from "./content/teams";
import {PageStatsEventComponent, PageStatsGeneralComponent} from "./content/stats";
import {PageEventsComponent} from "./content/events";


const routes: Routes = [
  { path: '', component: Example1Component, data: { title: 'SwimResults'} },
  {
    path: 'dashboard',
    component: PageDashboardGeneralComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'athletes',
    component: PageAthletesGeneralComponent
  },
  {
    path: 'teams',
    component: PageTeamsGeneralComponent
  },
  {
    path: 'stats',
    component: PageStatsGeneralComponent
  },


  {
    path: 'm/:event',
    children: [
      { path: "dashboard",  component: PageDashboardEventComponent },
      { path: "live",       component: PageLiveComponent },
      { path: "events",     component: PageEventsComponent },
      { path: "athletes",   component: PageAthletesEventComponent },
      { path: "teams",      component: PageTeamsEventComponent },
      { path: "files",      component: PageFilesComponent },
      { path: "stats",      component: PageStatsEventComponent },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
