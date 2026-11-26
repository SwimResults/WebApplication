import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {IncidentImpl} from '@swimresults/angular';

@Component({
    selector: 'sr-event-incident',
    templateUrl: './event-incident.component.html',
    styleUrl: './event-incident.component.scss',
    imports: [TranslateModule]
})
export class EventIncidentComponent {
    @Input() incident!: IncidentImpl;
}
