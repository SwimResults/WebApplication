import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {Team} from "../../../../../core/model";
import {RouteService} from "../../../../../core/service/route.service";

@Component({
    selector: 'sr-widget-map-medium',
    templateUrl: './widget-map-medium.component.html',
    styleUrls: ['./widget-map-medium.component.scss']
})
export class WidgetMapMediumComponent implements OnDestroy {

  @ViewChild('mapIframe') mapIframe?: ElementRef;

  meeting?: MeetingImpl;
  meetingSubscription: Subscription;

  organizer?: Team;

  constructor(
    private routeService: RouteService
  ) {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.fetchMap();
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }

  fetchMap() {
    setTimeout(() => {
      if (this.mapIframe)
        this.mapIframe.nativeElement.src = this.getMapsUrl();
    }, 1000)
  }

  getMapsUrl() {
    if (this.meeting) {
      return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCSsDd54wOfUNyJNeqTUeIEItOtlIgE_gs&q=' + this.meeting.location.name + ' ' + this.meeting.location.street + ' ' + this.meeting.location.number + ' ' + this.meeting.location.city + ' ' + this.meeting.location.postal_code + '&zoom=10'
    }
    console.log("failed fetching map url")
    return ""
  }
}
