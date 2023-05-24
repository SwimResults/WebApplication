export interface Heat {
  _id: string;
  meeting: string;
  event: string;
  number: number;
  start_estimation: string;
  start_at: string;
  finished_at: string;
}

export class HeatImpl implements Heat {
  _id: string;
  event: string;
  finished_at: string;
  meeting: string;
  number: number;
  start_at: string;
  start_estimation: string;


  constructor(heat: Heat) {
    this._id = heat._id;
    this.event = heat.event;
    this.finished_at = heat.finished_at;
    this.meeting = heat.meeting;
    this.number = heat.number;
    this.start_at = heat.start_at;
    this.start_estimation = heat.start_estimation;
  }

  getEstimatedStart(): Date {
    return new Date(this.start_estimation);
  }

  getEstimatedStartTime(): string {
    const d = this.getEstimatedStart();
    return d.getHours() + ":" + d.getMinutes();
  }
}
