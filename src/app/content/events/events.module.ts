import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEventsComponent, PageEventComponent } from './pages';
import {StartsModule} from "../starts";
import {ElementsModule} from "../../shared/elements/elements.module";
import { EventViewComponent } from './components';
import {CoreModule} from "../../core/core.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    PageEventsComponent,
    PageEventComponent,
    EventViewComponent
  ],
    imports: [
        CommonModule,
        StartsModule,
        ElementsModule,
        CoreModule,
        RouterLink
    ]
})
export class EventsModule { }
