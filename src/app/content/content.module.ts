import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExampleModule} from "./example";
import { CalendarComponent } from './calendar/calendar.component';
import {RouterLink} from "@angular/router";
import {ElementsModule} from "../shared/elements/elements.module";
import {CoreModule} from "../core/core.module";
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {
    ReportSubmissionDialogComponent
} from "./report/components/report-submission-dialog/report-submission-dialog.component";


@NgModule({
  declarations: [
    CalendarComponent,
    AuthComponent,
    LogoutComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        ElementsModule,
        CoreModule,
        ReportSubmissionDialogComponent
    ],
  exports: [
    ExampleModule
  ]
})
export class ContentModule { }
