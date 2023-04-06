import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardEventComponent, PageDashboardGeneralComponent } from './pages';


@NgModule({
  declarations: [
    PageDashboardEventComponent,
    PageDashboardGeneralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
