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
import {RouterLink} from "@angular/router";
import {WidgetClockMediumComponent} from "./widgets/clock/widget-clock-medium/widget-clock-medium.component";
import {WidgetClockSmallComponent} from "./widgets/clock/widget-clock-small/widget-clock-small.component";
import { WidgetSwimresultsSmallComponent } from './widgets/swimresults/widget-swimresults-small/widget-swimresults-small.component';
import { WidgetComingSoonLargeComponent } from './widgets/coming-soon/widget-coming-soon-large/widget-coming-soon-large.component';
import { WidgetComingSoonMediumComponent } from './widgets/coming-soon/widget-coming-soon-medium/widget-coming-soon-medium.component';
import { WidgetMapMediumComponent } from './widgets/map/widget-map-medium/widget-map-medium.component';
import {SafePipeModule} from "safe-pipe";
import { NotFoundSmallComponent } from './widgets/not-found/not-found-small/not-found-small.component';
import { NotFoundMediumComponent } from './widgets/not-found/not-found-medium/not-found-medium.component';
import { NotFoundLargeComponent } from './widgets/not-found/not-found-large/not-found-large.component';
import { WidgetFileAnnouncementSmallComponent } from './widgets/file/widget-file-announcement-small/widget-file-announcement-small.component';
import { WidgetFileStartListSmallComponent } from './widgets/file/widget-file-start-list-small/widget-file-start-list-small.component';
import { WidgetFileResultListSmallComponent } from './widgets/file/widget-file-result-list-small/widget-file-result-list-small.component';
import {WidgetFileSmallComponent} from "./widgets/file/widget-file-small.component";



@NgModule({
  declarations: [
    WidgetViewerComponent,
    WidgetContainerComponent,
    WidgetTileComponent,
    WidgetMeetingLargeComponent,
    WidgetMeetingMediumComponent,
    WidgetUserSmallComponent,
    WidgetClockMediumComponent,
    WidgetClockSmallComponent,
    WidgetSwimresultsSmallComponent,
    WidgetComingSoonLargeComponent,
    WidgetComingSoonMediumComponent,
    WidgetMapMediumComponent,
    NotFoundSmallComponent,
    NotFoundMediumComponent,
    NotFoundLargeComponent,
    WidgetFileSmallComponent,
    WidgetFileAnnouncementSmallComponent,
    WidgetFileStartListSmallComponent,
    WidgetFileResultListSmallComponent
  ],
  exports: [
    WidgetViewerComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ElementsModule,
    MatIconModule,
    RouterLink,
    SafePipeModule
  ]
})
export class WidgetModule { }
