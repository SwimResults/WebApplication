export interface Disqualification {
  _id: string;
  reason: string;
  type: string;
  announcement_time: string;
}

export class DisqualificationImpl implements Disqualification {
  _id: string = "";
  announcement_time: string = "";
  type: string = "";
  reason: string = "";


  constructor(disqualification: Disqualification) {
    this._id = disqualification._id;
    this.announcement_time = disqualification.announcement_time;
    this.reason = disqualification.reason;
    this.type = disqualification.type;
  }

  getAnnouncementTime(): Date {
    return new Date(this.announcement_time);
  }
}
