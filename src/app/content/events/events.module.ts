import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEventsComponent, PageEventComponent } from './pages';
import {StartsModule} from "../starts";
import {ElementsModule} from "../../shared/elements/elements.module";



@NgModule({
  declarations: [
    PageEventsComponent,
    PageEventComponent
  ],
  imports: [
      CommonModule,
      StartsModule,
      ElementsModule
  ]
})
export class EventsModule { }
