import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageMeetingsComponent} from "./pages";
import { MeetingListViewComponent, MeetingListComponent, MeetingListTileComponent } from './components';
import {CoreModule} from "../../core/core.module";
import {ElementsModule} from "../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    PageMeetingsComponent,
    MeetingListViewComponent,
    MeetingListComponent,
    MeetingListTileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ElementsModule,
    MatIconModule,
    RouterLink,
    MatProgressSpinnerModule
  ]
})
export class MeetingsModule { }
