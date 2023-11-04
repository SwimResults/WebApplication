import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEventsComponent, PageEventComponent } from './pages';
import {StartsModule} from "../starts";
import {ElementsModule} from "../../shared/elements/elements.module";
import { EventViewComponent } from './components';
import {CoreModule} from "../../core/core.module";
import {RouterLink} from "@angular/router";
import { EventListComponent } from './components/event-list/event-list.component';
import { EventListTileComponent } from './components/event-list-tile/event-list-tile.component';
import { EventListHeatComponent } from './components/event-list-heat/event-list-heat.component';
import { EventListEventComponent } from './components/event-list-event/event-list-event.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";



@NgModule({
    declarations: [
        PageEventsComponent,
        PageEventComponent,
        EventViewComponent,
        EventListComponent,
        EventListTileComponent,
        EventListHeatComponent,
        EventListEventComponent
    ],
    exports: [
        EventListTileComponent
    ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        RouterLink,
        MatIconModule,
        StartsModule,
        MatButtonToggleModule
    ]
})
export class EventsModule { }
