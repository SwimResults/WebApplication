import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetViewerComponent} from './widget-viewer/widget-viewer.component';
import {WidgetContainerComponent} from './widget-container/widget-container.component';
import {WidgetTileComponent} from './widget-tile/widget-tile.component';
import {CoreModule} from "../../core/core.module";
import {WidgetMeetingLargeComponent} from './widgets/meeting/widget-meeting-large/widget-meeting-large.component';
import {ElementsModule} from "../elements/elements.module";
import {WidgetUserSmallComponent} from './widgets/user/widget-user-small/widget-user-small.component';
import {MatIconModule} from "@angular/material/icon";
import {WidgetMeetingMediumComponent} from './widgets/meeting/widget-meeting-medium/widget-meeting-medium.component';
import {RouterLink} from "@angular/router";
import {WidgetClockMediumComponent} from "./widgets/clock/widget-clock-medium/widget-clock-medium.component";
import {WidgetClockSmallComponent} from "./widgets/clock/widget-clock-small/widget-clock-small.component";
import {
    WidgetSwimresultsSmallComponent
} from './widgets/swimresults/widget-swimresults-small/widget-swimresults-small.component';
import {
    WidgetComingSoonLargeComponent
} from './widgets/coming-soon/widget-coming-soon-large/widget-coming-soon-large.component';
import {
    WidgetComingSoonMediumComponent
} from './widgets/coming-soon/widget-coming-soon-medium/widget-coming-soon-medium.component';
import {WidgetMapMediumComponent} from './widgets/map/widget-map-medium/widget-map-medium.component';
import {SafePipeModule} from "safe-pipe";
import {NotFoundSmallComponent} from './widgets/not-found/not-found-small/not-found-small.component';
import {NotFoundMediumComponent} from './widgets/not-found/not-found-medium/not-found-medium.component';
import {NotFoundLargeComponent} from './widgets/not-found/not-found-large/not-found-large.component';
import {
    WidgetFileAnnouncementSmallComponent
} from './widgets/file/widget-file-announcement-small/widget-file-announcement-small.component';
import {
    WidgetFileStartListSmallComponent
} from './widgets/file/widget-file-start-list-small/widget-file-start-list-small.component';
import {
    WidgetFileResultListSmallComponent
} from './widgets/file/widget-file-result-list-small/widget-file-result-list-small.component';
import {WidgetFileSmallComponent} from "./widgets/file/widget-file-small.component";
import {WidgetNOSmallComponent} from './widgets/n-o/widget-n-o-small.component';
import {WidgetNOStartsSmallComponent} from './widgets/n-o/widget-n-o-starts-small/widget-n-o-starts-small.component';
import {WidgetNOHeatsSmallComponent} from './widgets/n-o/widget-n-o-heats-small/widget-n-o-heats-small.component';
import {
    WidgetNOAthletesSmallComponent
} from './widgets/n-o/widget-n-o-athletes-small/widget-n-o-athletes-small.component';
import {WidgetNOTeamsSmallComponent} from './widgets/n-o/widget-n-o-teams-small/widget-n-o-teams-small.component';
import {WidgetDelaySmallComponent} from './widgets/delay/widget-delay-small/widget-delay-small.component';
import {
    WidgetTimeInfoMediumComponent
} from './widgets/time-info/widget-time-info-medium/widget-time-info-medium.component';
import {WidgetStartsLargeComponent} from './widgets/starts/widget-starts-large/widget-starts-large.component';
import {
    WidgetFavoritesLargeComponent
} from './widgets/favorites/widget-favorites-large/widget-favorites-large.component';
import {
    WidgetFavoritesMediumComponent
} from './widgets/favorites/widget-favorites-medium/widget-favorites-medium.component';
import {WidgetLoginRequiredComponent} from './widget-login-required/widget-login-required.component';
import {WidgetInfoTextComponent} from './widget-info-text/widget-info-text.component';
import {WidgetTitleComponent} from './widget-title/widget-title.component';
import {WidgetFavoritesComponent} from './widgets/favorites/widget-favorites/widget-favorites.component';
import {StartsModule} from "../../content/starts";
import {WidgetWeblinksSmallComponent} from "./widgets/weblinks/widget-weblinks-small/widget-weblinks-small.component";
import {
    WidgetSponsorsMediumComponent
} from "./widgets/sponsors/widget-sponsors-medium/widget-sponsors-medium.component";


@NgModule({
    exports: [
        WidgetViewerComponent,
        WidgetDelaySmallComponent,
        WidgetTileComponent,
        WidgetContainerComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        ElementsModule,
        MatIconModule,
        RouterLink,
        SafePipeModule,
        StartsModule,
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
        WidgetFileResultListSmallComponent,
        WidgetNOSmallComponent,
        WidgetNOStartsSmallComponent,
        WidgetNOHeatsSmallComponent,
        WidgetNOAthletesSmallComponent,
        WidgetNOTeamsSmallComponent,
        WidgetDelaySmallComponent,
        WidgetTimeInfoMediumComponent,
        WidgetStartsLargeComponent,
        WidgetFavoritesLargeComponent,
        WidgetFavoritesMediumComponent,
        WidgetLoginRequiredComponent,
        WidgetInfoTextComponent,
        WidgetTitleComponent,
        WidgetFavoritesComponent,
        WidgetWeblinksSmallComponent,
        WidgetSponsorsMediumComponent
    ]
})
export class WidgetModule {
}
