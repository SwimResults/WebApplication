import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminEventComponent } from './pages';
import { AdminMainViewComponent, AdminHeatToolComponent, AdminImportToolComponent, AdminEventListToolComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PageAdminEventComponent,
    AdminMainViewComponent,
    AdminHeatToolComponent,
    AdminImportToolComponent,
    AdminEventListToolComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    MatIconModule
  ]
})
export class AdminModule { }
