import {Component, Input} from '@angular/core';
import {IncidentImpl} from "../../../../core/model/meeting/incident.model";

@Component({
    selector: 'sr-event-incident',
    templateUrl: './event-incident.component.html',
    styleUrl: './event-incident.component.scss',
    standalone: false
})
export class EventIncidentComponent {
    @Input() incident!: IncidentImpl;
}
