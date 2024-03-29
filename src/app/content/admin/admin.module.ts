import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminEventComponent } from './pages';
import { AdminMainViewComponent, AdminHeatToolComponent, AdminImportToolComponent, AdminEventListComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {EventsModule} from "../events";
import {CoreModule} from "../../core/core.module";
import {StartsModule} from "../starts";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {LiveModule} from "../live";
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [
    PageAdminEventComponent,
    AdminMainViewComponent,
    AdminHeatToolComponent,
    AdminImportToolComponent,
    AdminEventListComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    EventsModule,
    CoreModule,
    StartsModule,
    ReactiveFormsModule,
    MatIconModule,
    LiveModule,
    MatRadioModule
  ]
})
export class AdminModule { }
