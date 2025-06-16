import {Component} from '@angular/core';
import {EventListComponent} from '../../components/event-list/event-list.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-page-events',
    templateUrl: './page-events.component.html',
    styleUrls: ['./page-events.component.scss'],
    imports: [EventListComponent, TranslateModule]
})
export class PageEventsComponent {
}
