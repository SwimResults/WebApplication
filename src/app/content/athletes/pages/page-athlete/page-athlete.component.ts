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
  athleteId?: string;
  athleteAlias?: string;
  athleteYear?: number;


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
      let s0: string = s["entity_id"];
      if (s0.includes("-")) {
        let s2s = s0.split("-", 2)
        this.athleteAlias = s2s[0];
        this.athleteYear = +s2s[1];
        console.log("extracted alias: '" + this.athleteAlias + "' and year: '" + this.athleteYear + "'");
      } else {
        this.athleteId = s0;
      }
      this.fetchAthlete();
    });
  }

  fetchAthlete() {
    if (this.athleteId) {
      this.athleteService.getAthleteById(this.athleteId).subscribe(data => {
        this.athlete = data;
      })
    } else if (this.athleteAlias && this.athleteYear) {
      this.athleteService.getAthleteByAliasAndYear(this.athleteAlias, this.athleteYear).subscribe(data => {
        this.athlete = data;
        this.athleteId = this.athlete._id
      })
    }
  }

}
