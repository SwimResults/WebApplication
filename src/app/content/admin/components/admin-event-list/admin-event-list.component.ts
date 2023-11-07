import {Component, Input, OnInit} from '@angular/core';
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {EventService, HeatService} from "../../../../core/service/api";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";

@Component({
  selector: 'sr-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.scss']
})
export class AdminEventListComponent implements OnInit {
  @Input() meetingId?: string;
  @Input() meeting?: MeetingImpl;

  parts: MeetingPart[] = [];
  heats: Map<number, HeatImpl[]> = new Map<number, HeatImpl[]>()

  constructor(
    private eventService: EventService,
    private heatService: HeatService
  ) {
  }

  ngOnInit() {
    this.fetchLists();
  }

  fetchLists() {
    if (this.meetingId) {
      this.eventService.getEventsAsPartsByMeeting(this.meetingId).subscribe(data => {
        this.parts = data;
      });
    }
    this.fetchHeats();
  }

  fetchHeats() {
    if (!this.meetingId) return;
    this.heatService.getHeatsByMeeting(this.meetingId).subscribe(data => {
      if (data) {
        this.heats = new Map<number, HeatImpl[]>();
        for (let heat of data) {
          let heats = this.heats.get(heat.event);
          if (!heats) {
            heats = [];
          }
          heats.push(new HeatImpl(heat));
          this.heats.set(heat.event, heats);
        }
      }
    })
  }
}
