import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEventsComponent } from './pages';
import {StartsModule} from "../starts";



@NgModule({
  declarations: [
    PageEventsComponent
  ],
    imports: [
        CommonModule,
        StartsModule
    ]
})
export class EventsModule { }
