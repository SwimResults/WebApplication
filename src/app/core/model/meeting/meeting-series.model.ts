import {Location} from "./location.model";

export interface MeetingSeries {
  _id: string;
  name_full: string;
  name_medium: string;
  name_short: string;
  location: Location;
  organizer_id: string;
}
