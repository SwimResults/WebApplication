import {Component} from '@angular/core';
import {
    StatsParticipantsAgesComponent
} from "../../components/stats-participants-ages/stats-participants-ages.component";

@Component({
    selector: 'sr-page-stats-event',
    templateUrl: './page-stats-event.component.html',
    imports: [
        StatsParticipantsAgesComponent
    ],
    styleUrls: ['./page-stats-event.component.scss']
})
export class PageStatsEventComponent {

}
