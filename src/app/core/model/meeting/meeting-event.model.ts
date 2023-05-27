import {Style} from "./style.model";

export interface MeetingEvent {
  _id: string;
  number: number;
  distance: number;
  relay_distance: string;
  meeting: string;
  gender: string;
  style: Style

}

export class MeetingEventImpl implements MeetingEvent {
  _id: string;
  distance: number;
  gender: string;
  meeting: string;
  number: number;
  relay_distance: string;
  style: Style;


  constructor(event: MeetingEvent) {
    this._id = event._id;
    this.distance = event.distance;
    this.gender = event.gender;
    this.meeting = event.meeting;
    this.number = event.number;
    this.relay_distance = event.relay_distance;
    this.style = event.style;
  }

  getFullDistanceName() {

  }
}
