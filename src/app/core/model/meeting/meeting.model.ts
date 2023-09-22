import {Location} from "./location.model";
import {MeetingSeries} from "./meeting-series.model";
import {MeetingData} from "./meeting-data.model";
import {MeetingLayout} from "./meeting-layout.model";
import {months} from "../../constant/months.constant";

export interface Meeting {
  _id: string;
  date_start: string;
  date_end: string;
  location: Location;
  organizer_id: string;
  series: MeetingSeries;
  iteration: number;
  meet_id: string;

  data: MeetingData;
  layout: MeetingLayout;
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
  layout: MeetingLayout = {} as MeetingLayout;


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
      this.data = meeting.data;
      this.layout = meeting.layout;
    }
  }

  public getFullSeriesNameWithYear(): string {
    return this.getFullSeriesName() + " " + this.getStartDate().getFullYear();
  }

  public getFullSeriesName(): string {
    let out: string = "";
    if (this.iteration > 1) out += this.iteration + ". ";
    out += this.series.name_full;
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

  public getDateStringWithYear(monthReplaceable: boolean = false): string {
    return this.getDateString(monthReplaceable) + (monthReplaceable ? " " : "") +  this.getEndDate().getFullYear()
  }

  public getDateString(monthReplaceable: boolean = false): string {
    const t1 = this.getStartDate();
    const t2 = this.getEndDate();

    const d1 = t1.getDate();
    const d2 = t2.getDate();

    const m1 = t1.getMonth()+1;
    const m2 = t2.getMonth()+1;

    const mo1 = monthReplaceable ? " #" + months.get(m1) + "# " : m1 + ".";
    const mo2 = monthReplaceable ? " #" + months.get(m2) + "# " : m2 + ".";

    if (m1 == m2) {

      if (d1 == d2)
        return d1 + "." + mo1;
      if (Math.abs((d1 - d2)) == 1)
        return d1 + ". & " + d2 + "." + mo1;
      else
        return d1 + ". - " + d2 + "." + mo1;
    } else {
      return d1 + "." + mo1 + " - " + d2 + "." + mo2;
    }

  }
}
