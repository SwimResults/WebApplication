import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Example1Component} from "./content/example";


const routes: Routes = [
  { path: '', component: Example1Component, data: { title: 'SwimResults'} },
  {
    path: 'dashboard',
    component: Example1Component,
    data: { title: 'web.dashboard.layout.nav.link.dashboard_label'}
  },
  {
    path: 'calendar',
    component: Example1Component
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
