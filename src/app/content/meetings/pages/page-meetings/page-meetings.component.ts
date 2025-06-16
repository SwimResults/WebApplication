import {Component} from '@angular/core';
import {MeetingListViewComponent} from '../../components/meeting-list-view/meeting-list-view.component';

@Component({
    selector: 'sr-page-meetings',
    templateUrl: './page-meetings.component.html',
    styleUrls: ['./page-meetings.component.scss'],
    imports: [MeetingListViewComponent]
})
export class PageMeetingsComponent {

}
