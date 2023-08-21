import {Location} from "./location.model";
import {MeetingSeries} from "./meeting-series.model";
import {MeetingData} from "./meeting-data.model";

export interface Meeting {
  _id: string;
  date_start: string;
  date_end: string;
  location: Location;
  organizer_id: string;
  series: MeetingSeries;
  iteration: number;
  meet_id: string;

  data: MeetingData
}

export class MeetingImpl implements Meeting {
  _id: string = "";
  date_start: string = "";
  date_end: string = "";
  location: Location = {} as Location;
  organizer_id: string = "";
  series: MeetingSeries = {} as MeetingSeries;
  iteration: number = 1;
  meet_id: string = "";
  data: MeetingData = {} as MeetingData;


  constructor(meeting: Meeting) {
    if (meeting !== undefined) {
      this._id = meeting._id;
      this.date_start = meeting.date_start;
      this.date_end = meeting.date_end;
      this.location = meeting.location;
      this.organizer_id = meeting.organizer_id;
      this.series = meeting.series;
      this.iteration = meeting.iteration;
      this.meet_id = meeting.meet_id;
      this.data = meeting.data
    }
  }

  public getFullSeriesName(): string {
    let out: string = "";
    if (this.iteration > 1) out += this.iteration + ". ";
    out += this.series.name_full;
    out += " "
    out += this.getStartDate().getFullYear()
    return out;
  }

  public getShortSeriesName(): string {
    let out: string = "";
    if (this.iteration > 1) out += this.iteration + ". ";
    out += this.series.name_short;
    out += " "
    out += this.getStartDate().getFullYear()
    return out;
  }

  public getStartDate(): Date {
    return new Date(this.date_start);
  }

  public getEndDate(): Date {
    return new Date(this.date_end);
  }
}
