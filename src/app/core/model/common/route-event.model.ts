import {Meeting} from "../meeting/meeting.model";

export interface RouteEvent {
  meeting: Meeting;
  has_meeting: boolean;
}
