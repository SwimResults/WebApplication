import {createDate, createDateFromUTC} from "../../function/date.functions";

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

  delay?: number;


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
      console.log(this.start_at)
      if (this.getStartAt().getTime() > 1000) {
          return createDateFromUTC(this.start_delay_estimation);
      } else {
          return createDate(this.start_delay_estimation)
      }
  }

  getFinishedAt(): Date {
    return createDateFromUTC(this.finished_at);
  }

  getFinishedAtTime(): string {
    const d = this.getFinishedAt();
    let minutes = "0" + d.getMinutes();
    return d.getHours() + ":" + minutes.substr(-2);
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
    return createDateFromUTC(this.start_at);
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
      if (this.delay !== undefined) return this.delay;
    let delayEst = this.getStartDelayEstimation()
    let est = this.getEstimatedStart()

    delayEst.setFullYear(2023, 1, 1);
    est.setFullYear(2023, 1, 1);


    return delayEst.getTime() - est.getTime();
  }

  getDelayReadable(): string {
      const delay = Math.abs(this.getDelay());
      let d = new Date(delay);
      const h = d.getHours();
      const m = d.getMinutes();
      let str = "";

      if (h) {
          str += h + "h";
          if (m) {
              str += m + "m";
          }
          return str;
      }

      return m + "m";
  }

  getDelayHoursAndMinutes(): number[] {
      const delay = Math.round(Math.abs(this.getDelay())/(1000*60));
      const h = Math.floor(delay / 60);
      const m = delay - 60*h;
      return [h, m];
  }

  isDelayed(): boolean {
      return this.getDelay() > 4*60*1000;
  }
}
