import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Example1Component} from "./content/example";
import {CalendarComponent} from "./content/calendar/calendar.component";


const routes: Routes = [
  { path: '', component: Example1Component, data: { title: 'SwimResults'} },
  {
    path: 'dashboard',
    component: Example1Component,
    data: { title: 'web.dashboard.layout.nav.link.dashboard_label'}
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'athletes',
    component: Example1Component
  },
  {
    path: 'teams',
    component: Example1Component
  },
  {
    path: 'stats',
    component: Example1Component
  },


  {
    path: 'event/:event',
    component: Example1Component,
    children: [
      { path: "dashboard", component: Example1Component },
      { path: "live", component: Example1Component },
      { path: "events", component: Example1Component },
      { path: "athletes", component: Example1Component },
      { path: "teams", component: Example1Component },
      { path: "files", component: Example1Component },
      { path: "stats", component: Example1Component },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
