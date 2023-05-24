export interface Disqualification {
  _id: string;
  reason: string;
  announcement_time: string;
}

export class DisqualificationImpl implements Disqualification {
  _id: string = "";
  announcement_time: string = "";
  reason: string = "";


  constructor(disqualification: Disqualification) {
    this._id = disqualification._id;
    this.announcement_time = disqualification.announcement_time;
    this.reason = disqualification.reason;
  }

  getAnnouncementTime(): Date {
    return new Date(this.announcement_time);
  }
}
