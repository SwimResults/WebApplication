import {Component} from "@angular/core";
import {WidgetMeetingLargeComponent} from "./meeting/widget-meeting-large/widget-meeting-large.component";
import {WidgetUserSmallComponent} from "./user/widget-user-small/widget-user-small.component";
import {WidgetMeetingMediumComponent} from "./meeting/widget-meeting-medium/widget-meeting-medium.component";
import {WidgetClockSmallComponent} from "./clock/widget-clock-small/widget-clock-small.component";
import {WidgetClockLargeComponent} from "./clock/widget-clock-large/widget-clock-large.component";
import {WidgetClockMediumComponent} from "./clock/widget-clock-medium/widget-clock-medium.component";

export type ComponentClass = { new (): Component };

export const widgetComponents = new Map<String, any>();
widgetComponents.set('meeting-large', WidgetMeetingLargeComponent);
widgetComponents.set('meeting-medium', WidgetMeetingMediumComponent);
widgetComponents.set('user-small', WidgetUserSmallComponent);
widgetComponents.set('clock-large', WidgetClockLargeComponent);
widgetComponents.set('clock-medium', WidgetClockMediumComponent);
widgetComponents.set('clock-small', WidgetClockSmallComponent);
