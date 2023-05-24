import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEventsComponent } from './pages';
import {StartsModule} from "../starts";
import {ElementsModule} from "../../shared/elements/elements.module";



@NgModule({
  declarations: [
    PageEventsComponent
  ],
    imports: [
        CommonModule,
        StartsModule,
        ElementsModule
    ]
})
export class EventsModule { }
