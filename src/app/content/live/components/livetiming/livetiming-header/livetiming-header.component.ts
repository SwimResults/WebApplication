import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChangeHeatEvent, LiveSettingsData} from "../livetiming.component";

@Component({
  selector: 'sr-livetiming-header',
  templateUrl: './livetiming-header.component.html',
  styleUrls: ['./livetiming-header.component.scss']
})
export class LivetimingHeaderComponent {
  //@Input() event!: MeetingEvent;
  @Input() liveSettingsData!: LiveSettingsData;
  @Output() changeHeat: EventEmitter<ChangeHeatEvent> = new EventEmitter<ChangeHeatEvent>();

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
