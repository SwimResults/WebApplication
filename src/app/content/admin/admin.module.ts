import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageAdminEventComponent} from './pages';
import {
    AdminMainViewComponent,
    AdminHeatToolComponent,
    AdminImportToolComponent,
    AdminEventListComponent,
    AdminImportTextDialog
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


@NgModule({
    declarations: [
        PageAdminEventComponent,
        AdminMainViewComponent,
        AdminHeatToolComponent,
        AdminImportToolComponent,
        AdminEventListComponent,
        AdminImportTextDialog
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
        MatDialogClose
    ]
})
export class AdminModule {
}
