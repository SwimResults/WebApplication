import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChangeHeatEvent, LiveSettingsData} from "../livetiming.component";
import {HeatImpl} from "../../../../../core/model/start/heat.model";
import {MeetingImpl, MeetingStates} from "../../../../../core/model/meeting/meeting.model";
import {HeatTimesComponent} from '../../../../../shared/elements/heat-times/heat-times.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
    selector: 'sr-livetiming-header',
    templateUrl: './livetiming-header.component.html',
    styleUrls: ['./livetiming-header.component.scss'],
    imports: [HeatTimesComponent, MatSlideToggle]
})
export class LivetimingHeaderComponent {
  //@Input() event!: MeetingEvent;
  @Input() liveSettingsData!: LiveSettingsData;
  @Input() heat?: HeatImpl
  @Output() changeHeat: EventEmitter<ChangeHeatEvent> = new EventEmitter<ChangeHeatEvent>();

  @Input() meeting!: MeetingImpl;

  meetingStates = MeetingStates;


  onLiveButtonClick() {
    this.liveSettingsData.isLive = !this.liveSettingsData.isLive;
    if (this.liveSettingsData.isLive) {
      this.changeHeat.emit({
        name: "nothing",
        next: true
      } as ChangeHeatEvent)
    } else {
      this.changeHeat.emit({
        name: "nothing",
        next: false
      } as ChangeHeatEvent)
    }
  }
}
