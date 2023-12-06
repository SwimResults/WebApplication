import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'sr-page-live',
  templateUrl: './page-live.component.html',
  styleUrls: ['./page-live.component.scss']
})
export class PageLiveComponent implements OnDestroy {
    @ViewChild('streamIframe') streamIframe?: ElementRef;

    meeting?: MeetingImpl;
    meetingSubscription: Subscription;


    streamButtonData = {platform: ""};

    constructor(
        private routeService: RouteService
    ) {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
            this.fetchStream();
            this.fetchPlatform();
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
    }

    fetchStream() {
        setTimeout(() => {
            if (this.meeting && this.meeting.data && this.meeting.data.stream_embed_url) {
                if (this.streamIframe)
                    this.streamIframe.nativeElement.src = this.meeting.data.stream_embed_url;
            }
        }, 1000)
    }

    fetchPlatform() {
        if (this.meeting && this.meeting.data && this.meeting.data.stream_url) {
            let url = this.meeting.data.stream_url;
            url = url.replace("https://", "");
            url = url.replace("http://", "")
            url = url.split("/")[0];
            url = url.split("?")[0];
            this.streamButtonData.platform =  url;
        }
    }

    protected readonly MeetingStates = MeetingStates;
}
