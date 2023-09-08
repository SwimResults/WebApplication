import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetViewerComponent } from './widget-viewer/widget-viewer.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { WidgetTileComponent } from './widget-tile/widget-tile.component';
import {CoreModule} from "../../core/core.module";
import { WidgetMeetingLargeComponent } from './widgets/meeting/widget-meeting-large/widget-meeting-large.component';
import {ElementsModule} from "../elements/elements.module";
import { WidgetUserSmallComponent } from './widgets/user/widget-user-small/widget-user-small.component';
import {MatIconModule} from "@angular/material/icon";
import { WidgetMeetingMediumComponent } from './widgets/meeting/widget-meeting-medium/widget-meeting-medium.component';



@NgModule({
  declarations: [
    WidgetViewerComponent,
    WidgetContainerComponent,
    WidgetTileComponent,
    WidgetMeetingLargeComponent,
    WidgetUserSmallComponent,
    WidgetMeetingMediumComponent
  ],
  exports: [
    WidgetViewerComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        ElementsModule,
        MatIconModule
    ]
})
export class WidgetModule { }
