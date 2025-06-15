import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageAdminEventComponent} from './pages';
import {
  AdminMainViewComponent,
  AdminHeatToolComponent,
  AdminImportToolComponent,
  AdminEventListComponent,
  AdminImportTextDialogComponent, AdminReportViewComponent
} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {EventsModule} from "../events";
import {CoreModule} from "../../core/core.module";
import {StartsModule} from "../starts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {LiveModule} from "../live";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PageAdminNotificationComponent} from "./pages/page-admin-notification/page-admin-notification.component";
import { AdminNotificationSenderComponent } from './components/admin-notification-sender/admin-notification-sender.component';
import { AdminNotificationViewComponent } from './components/admin-notification-view/admin-notification-view.component';


@NgModule({
    declarations: [
        PageAdminEventComponent,
        PageAdminNotificationComponent,
        AdminMainViewComponent,
        AdminHeatToolComponent,
        AdminImportToolComponent,
        AdminEventListComponent,
        AdminImportTextDialogComponent,
        AdminNotificationSenderComponent,
        AdminNotificationViewComponent
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
    MatRadioModule,
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    MatFormFieldModule,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatDialogClose,
    AdminReportViewComponent
  ]
})
export class AdminModule {
}
