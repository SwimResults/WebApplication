import type * as ApiMeeting from '@swimresults/api/meeting';
import {MeetingEvent} from "./meeting-event.model";

export type MeetingEventLivetiming = Omit<ApiMeeting.EventLivetimingDto, 'event' | 'prev_event' | 'next_event'> & {
  event: MeetingEvent;
  prev_event: MeetingEvent;
  next_event: MeetingEvent;
};
