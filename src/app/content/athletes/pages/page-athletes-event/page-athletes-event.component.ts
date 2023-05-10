import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {StartService} from "../../../../core/service/api/start/start.service";
import {Athlete} from "../../../../core/model";
import {Start} from "../../../../core/model/start/start.model";
import {AthleteService} from "../../../../core/service/api";
import {Subscription} from "rxjs";

@Component({
  selector: 'sr-page-athletes-event',
  templateUrl: './page-athletes-event.component.html',
  styleUrls: ['./page-athletes-event.component.scss']
})
export class PageAthletesEventComponent implements OnInit, OnDestroy {
  meeting: Meeting = {} as Meeting;
  athletes: Athlete[] = [];
  loading: boolean = false;
  private meetingSubscription: Subscription;

  constructor(
    private routeService: RouteService,
    private startService: StartService,
    private athleteService: AthleteService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
      this.fetchAthletes()
    })
  }

  ngOnInit() {
    //this.fetchAthletes();
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }

  fetchAthletes() {
    if (this.loading) return;
    this.loading = true;
    this.startService.getStartsByMeeting(this.meeting.meet_id).subscribe(data => {
      if (data satisfies Start[]) {

        this.athletes = [];

        for (let start of data) {
          if (start satisfies Start) {

            this.athleteService.getAthleteById(start.athlete).subscribe(athlete => {
              this.athletes.push(athlete);
            })
          }
        }

        this.loading = false;
      }
    })
  }

}
