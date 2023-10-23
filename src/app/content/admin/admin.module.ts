import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminEventComponent } from './pages';
import { AdminMainViewComponent, AdminHeatToolComponent, AdminImportToolComponent, AdminEventListToolComponent } from './components';



@NgModule({
  declarations: [
    PageAdminEventComponent,
    AdminMainViewComponent,
    AdminHeatToolComponent,
    AdminImportToolComponent,
    AdminEventListToolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
