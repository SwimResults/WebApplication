import {Component, OnDestroy, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "../../../../core/service/route.service";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'sr-page-athlete',
  templateUrl: './page-athlete.component.html',
  styleUrls: ['./page-athlete.component.scss']
})
export class PageAthleteComponent implements OnInit, OnDestroy {
  meeting: Meeting = {} as Meeting;
  meetingId: string | undefined;
  private meetingSubscription: Subscription;
  private meetingIdSubscription: Subscription;

  athlete: Athlete = {} as Athlete;
  athleteId: string = "";


  constructor(
    private athleteService: AthleteService,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService
  ) {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
    })
  }

  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
    this.meetingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.athleteId = s["entity_id"];
      this.fetchAthlete();
    });
  }

  fetchAthlete() {
    this.athleteService.getAthleteById(this.athleteId).subscribe(data => {
      this.athlete = data;
    })
  }

}
