import {MeetingEvent} from "./meeting-event.model";

export interface MeetingEventLivetiming {
  event: MeetingEvent;
  prev_event: MeetingEvent;
  next_event: MeetingEvent;
}
