import type * as ApiStart from '@swimresults/api/start';
export type Disqualification = ApiStart.Disqualification;

export class DisqualificationImpl implements Disqualification {
  _id: string = "";
  announcement_time: string = "";
  type: string = "";
  reason: string = "";
  added_at: string = "";


  constructor(disqualification: Disqualification) {
    this._id = disqualification._id;
    this.announcement_time = disqualification.announcement_time;
    this.reason = disqualification.reason ?? '';
    this.type = disqualification.type ?? '';
    this.added_at = disqualification.added_at;
  }

  getAnnouncementTime(): Date {
    return new Date(this.announcement_time);
  }
}
