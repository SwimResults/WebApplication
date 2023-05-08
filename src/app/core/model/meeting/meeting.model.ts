import {Location} from "./location.model";
import {MeetingSeries} from "./meeting-series.model";

export interface Meeting {
  _id: string;
  date_start: string;
  date_end: string;
  date_start_date: Date;
  date_end_date: Date;
  location: Location;
  organizer_id: string;
  series: MeetingSeries;
  iteration: number;
  meet_id: string;
}
