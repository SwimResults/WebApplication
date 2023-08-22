import {createDate} from "../../function/date.functions";

export interface Heat {
  _id: string;
  meeting: string;
  event: number;
  number: number;
  start_estimation: string;
  start_delay_estimation: string;
  start_at: string;
  finished_at: string;
}

export class HeatImpl implements Heat {
  _id: string;
  event: number;
  meeting: string;
  number: number;
  start_estimation: string;
  start_delay_estimation: string;
  start_at: string;
  finished_at: string;


  constructor(heat: Heat) {
    this._id = heat._id;
    this.event = heat.event;
    this.finished_at = heat.finished_at;
    this.meeting = heat.meeting;
    this.number = heat.number;
    this.start_at = heat.start_at;
    this.start_estimation = heat.start_estimation;
    this.start_delay_estimation = heat.start_delay_estimation;
  }

  getEstimatedStart(): Date {
    return createDate(this.start_estimation);
  }

  getEstimatedStartTime(): string {
    const d = this.getEstimatedStart();
    let minutes = "0" + d.getMinutes();
    return d.getHours() + ":" + minutes.substr(-2);
  }

  getStartDelayEstimation(): Date {
    return createDate(this.start_delay_estimation);
  }

  getStartDelayEstimationTime(): string {
    const d = this.getStartDelayEstimation();
    let minutes = "0" + d.getMinutes();
    return d.getHours() + ":" + minutes.substr(-2);
  }

  hasStartDelayEstimationTime(): boolean {
    if (!this.start_delay_estimation) return false;
    let s = this.getStartDelayEstimation()
    return !(s.getMinutes() == 0 && s.getHours() == 0)
  }

  getStartAt(): Date {
    return createDate(this.start_at);
  }

  getStartAtTime(): string {
    const d = this.getStartAt();
    let minutes = "0" + d.getMinutes();
    return d.getHours() + ":" + minutes.substr(-2);
  }

  hasStartTime(): boolean {
    let s = this.getStartAt()
    return !(s.getMinutes() == 0 && s.getHours() == 0)
  }

  // returns delay in seconds
  getDelay(): number {
    let delayEst = this.getStartDelayEstimation()
    let est = this.getEstimatedStart()

    delayEst.setFullYear(0, 0, 0);
    est.setFullYear(0, 0, 0);

    return delayEst.getTime() - est.getTime();
  }
}
