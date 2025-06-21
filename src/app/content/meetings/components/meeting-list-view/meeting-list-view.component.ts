import {Component} from '@angular/core';
import {MeetingListComponent} from '../meeting-list/meeting-list.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-meeting-list-view',
    templateUrl: './meeting-list-view.component.html',
    styleUrls: ['./meeting-list-view.component.scss'],
    imports: [MeetingListComponent, TranslateModule]
})
export class MeetingListViewComponent {

}
