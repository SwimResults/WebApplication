import {Component} from '@angular/core';
import {EventViewComponent} from '../../components/event-view/event-view.component';


@Component({
    selector: 'sr-page-event',
    templateUrl: './page-event.component.html',
    styleUrls: ['./page-event.component.scss'],
    imports: [EventViewComponent]
})
export class PageEventComponent {

}
