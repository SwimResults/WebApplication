import {Component} from "@angular/core";
import {WidgetMeetingLargeComponent} from "./meeting/widget-meeting-large/widget-meeting-large.component";
import {WidgetUserSmallComponent} from "./user/widget-user-small/widget-user-small.component";
import {WidgetMeetingMediumComponent} from "./meeting/widget-meeting-medium/widget-meeting-medium.component";
import {WidgetClockSmallComponent} from "./clock/widget-clock-small/widget-clock-small.component";
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
import {NotFoundSmallComponent} from "./not-found/not-found-small/not-found-small.component";
import {NotFoundLargeComponent} from "./not-found/not-found-large/not-found-large.component";
import {NotFoundMediumComponent} from "./not-found/not-found-medium/not-found-medium.component";
import {
    WidgetFileAnnouncementSmallComponent
} from "./file/widget-file-announcement-small/widget-file-announcement-small.component";
import {
    WidgetFileStartListSmallComponent
} from "./file/widget-file-start-list-small/widget-file-start-list-small.component";
import {
    WidgetFileResultListSmallComponent
} from "./file/widget-file-result-list-small/widget-file-result-list-small.component";
import {WidgetNOStartsSmallComponent} from "./n-o/widget-n-o-starts-small/widget-n-o-starts-small.component";
import {WidgetNOHeatsSmallComponent} from "./n-o/widget-n-o-heats-small/widget-n-o-heats-small.component";
import {WidgetNOAthletesSmallComponent} from "./n-o/widget-n-o-athletes-small/widget-n-o-athletes-small.component";
import {WidgetNOTeamsSmallComponent} from "./n-o/widget-n-o-teams-small/widget-n-o-teams-small.component";
import {WidgetDelaySmallComponent} from "./delay/widget-delay-small/widget-delay-small.component";
import {WidgetFavoritesMediumComponent} from "./favorites/widget-favorites-medium/widget-favorites-medium.component";
import {WidgetFavoritesLargeComponent} from "./favorites/widget-favorites-large/widget-favorites-large.component";
import {WidgetStartsLargeComponent} from "./starts/widget-starts-large/widget-starts-large.component";
import {WidgetWeblinksSmallComponent} from "./weblinks/widget-weblinks-small/widget-weblinks-small.component";

export type ComponentClass = { new (): Component };

export const widgetComponents = new Map<String, any>();
widgetComponents.set('meeting-large', WidgetMeetingLargeComponent);
widgetComponents.set('meeting-medium', WidgetMeetingMediumComponent);
widgetComponents.set('user-small', WidgetUserSmallComponent);
widgetComponents.set('clock-medium', WidgetClockMediumComponent);
widgetComponents.set('clock-small', WidgetClockSmallComponent);
widgetComponents.set('swimresults-small', WidgetSwimresultsSmallComponent);
widgetComponents.set('coming-soon-large', WidgetComingSoonLargeComponent);
widgetComponents.set('coming-soon-medium', WidgetComingSoonMediumComponent);
widgetComponents.set('map-medium', WidgetMapMediumComponent);
widgetComponents.set('not-found-small', NotFoundSmallComponent);
widgetComponents.set('not-found-medium', NotFoundMediumComponent);
widgetComponents.set('not-found-large', NotFoundLargeComponent);
widgetComponents.set('file-announcement-small', WidgetFileAnnouncementSmallComponent);
widgetComponents.set('file-start-list-small', WidgetFileStartListSmallComponent);
widgetComponents.set('file-result-list-small', WidgetFileResultListSmallComponent);
widgetComponents.set('n-o-starts-small', WidgetNOStartsSmallComponent);
widgetComponents.set('n-o-heats-small', WidgetNOHeatsSmallComponent);
widgetComponents.set('n-o-athletes-small', WidgetNOAthletesSmallComponent);
widgetComponents.set('n-o-teams-small', WidgetNOTeamsSmallComponent);
widgetComponents.set('delay-small', WidgetDelaySmallComponent);
widgetComponents.set('favorites-medium', WidgetFavoritesMediumComponent);
widgetComponents.set('favorites-large', WidgetFavoritesLargeComponent);
widgetComponents.set('starts-large', WidgetStartsLargeComponent);
widgetComponents.set('weblinks-small', WidgetWeblinksSmallComponent);
