import {Component, Input, OnInit} from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sr-event-list-event',
  templateUrl: './event-list-event.component.html',
  styleUrls: ['./event-list-event.component.scss']
})
export class EventListEventComponent implements OnInit {
  @Input() event!: MeetingEvent;
  @Input() heats!: Map<number, HeatImpl[]>;
  heat?: HeatImpl;
  expanded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let h: HeatImpl[] | undefined = this.heats?.get(this.event.number);
    if (h && h.length > 0)
      this.heat = h[0];
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  openEvent() {
    this.router.navigate([this.event.number], {relativeTo: this.route}).then(_ => {
      console.log("failed to navigate to event: " + this.event.number)
    })
   }
}
