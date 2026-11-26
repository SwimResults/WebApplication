import type * as ApiMeeting from '@swimresults/api/meeting';
import {MeetingEvent} from "./meeting-event.model";

export type MeetingPart = Omit<ApiMeeting.MeetingPart, 'events'> & {
  events: MeetingEvent[];
};
