import {Component, Input} from '@angular/core';
import {IncidentImpl} from "../../../../core/model/meeting/incident.model";
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-event-incident',
    templateUrl: './event-incident.component.html',
    styleUrl: './event-incident.component.scss',
    imports: [TranslateModule]
})
export class EventIncidentComponent {
    @Input() incident!: IncidentImpl;
}
