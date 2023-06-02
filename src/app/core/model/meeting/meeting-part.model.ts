import {MeetingEvent} from "./meeting-event.model";

export interface MeetingPart {
  number: number;
  name: string;
  events: MeetingEvent[]
}
