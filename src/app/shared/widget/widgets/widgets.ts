import {Component} from "@angular/core";
import {WidgetMeetingLargeComponent} from "./meeting/widget-meeting-large/widget-meeting-large.component";
import {WidgetUserSmallComponent} from "./user/widget-user-small/widget-user-small.component";
import {WidgetMeetingMediumComponent} from "./meeting/widget-meeting-medium/widget-meeting-medium.component";
import {WidgetClockSmallComponent} from "./clock/widget-clock-small/widget-clock-small.component";
import {WidgetClockLargeComponent} from "./clock/widget-clock-large/widget-clock-large.component";
import {WidgetClockMediumComponent} from "./clock/widget-clock-medium/widget-clock-medium.component";
import {
  WidgetSwimresultsSmallComponent
} from "./swimresults/widget-swimresults-small/widget-swimresults-small.component";
import {
  WidgetComingSoonLargeComponent
} from "./coming-soon/widget-coming-soon-large/widget-coming-soon-large.component";
import {
  WidgetComingSoonMediumComponent
} from "./coming-soon/widget-coming-soon-medium/widget-coming-soon-medium.component";
import {WidgetMapMediumComponent} from "./map/widget-map-medium/widget-map-medium.component";

export type ComponentClass = { new (): Component };

export const widgetComponents = new Map<String, any>();
widgetComponents.set('meeting-large', WidgetMeetingLargeComponent);
widgetComponents.set('meeting-medium', WidgetMeetingMediumComponent);
widgetComponents.set('user-small', WidgetUserSmallComponent);
widgetComponents.set('clock-large', WidgetClockLargeComponent);
widgetComponents.set('clock-medium', WidgetClockMediumComponent);
widgetComponents.set('clock-small', WidgetClockSmallComponent);
widgetComponents.set('swimresults-small', WidgetSwimresultsSmallComponent);
widgetComponents.set('coming-soon-large', WidgetComingSoonLargeComponent);
widgetComponents.set('coming-soon-medium', WidgetComingSoonMediumComponent);
widgetComponents.set('map-medium', WidgetMapMediumComponent);
