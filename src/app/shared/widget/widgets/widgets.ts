import {Component} from "@angular/core";
import {WidgetMeetingLargeComponent} from "./meeting/widget-meeting-large/widget-meeting-large.component";
import {WidgetUserSmallComponent} from "./user/widget-user-small/widget-user-small.component";

export type ComponentClass = { new (): Component };

export const widgetComponents = new Map<String, any>();
widgetComponents.set('meeting-large', WidgetMeetingLargeComponent);
widgetComponents.set('user-small', WidgetUserSmallComponent);
