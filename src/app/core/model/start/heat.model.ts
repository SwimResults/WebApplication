import {createDateForBerlin} from "../../function/date.functions";

export interface Heat {
    _id: string;
    meeting: string;
    event: number;
    number: number;
    is_pre_list: boolean;
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
    is_pre_list: boolean;
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
        this.is_pre_list = heat.is_pre_list;
        this.start_at = heat.start_at;
        this.start_estimation = heat.start_estimation;
        this.start_delay_estimation = heat.start_delay_estimation;
    }

    getEstimatedStart(): Date {
        return createDateForBerlin(this.start_estimation);
    }

    getEstimatedStartTime(): string {
        const d = this.getEstimatedStart();
        const minutes = "0" + d.getMinutes();
        return d.getHours() + ":" + minutes.substr(-2);
    }

    getStartDelayEstimation(): Date {
        return createDateForBerlin(this.start_delay_estimation);
    }

    getFinishedAt(): Date {
        return createDateForBerlin(this.finished_at);
    }

    getFinishedAtTime(): string {
        const d = this.getFinishedAt();
        const minutes = "0" + d.getMinutes();
        return d.getHours() + ":" + minutes.substr(-2);
    }

    getStartDelayEstimationTime(): string {
        const d = this.getStartDelayEstimation();
        const minutes = "0" + d.getMinutes();
        return d.getHours() + ":" + minutes.substr(-2);
    }

    hasStartDelayEstimationTime(): boolean {
        if (!this.start_delay_estimation) return false;
        const s = this.getStartDelayEstimation()
        return !(s.getMinutes() == 0 && s.getHours() == 0)
    }

    getStartAt(): Date {
        return createDateForBerlin(this.start_at);
    }

    getStartAtTime(): string {
        const d = this.getStartAt();
        const minutes = "0" + d.getMinutes();
        return d.getHours() + ":" + minutes.substr(-2);
    }

    hasStartTime(): boolean {
        const s = this.getStartAt()
        return !(s.getMinutes() == 0 && s.getHours() == 0)
    }

    // returns delay in seconds
    getDelay(): number {
        if (this.delay !== undefined) return this.delay;
        const delayEst = this.getStartDelayEstimation()
        const est = this.getEstimatedStart()

        delayEst.setFullYear(2023, 1, 1);
        est.setFullYear(2023, 1, 1);


        return delayEst.getTime() - est.getTime();
    }

    getDelayReadable(): string {
        const delay = Math.abs(this.getDelay());
        const d = new Date(delay);
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
        const delay = Math.round(Math.abs(this.getDelay()) / (1000 * 60));
        const h = Math.floor(delay / 60);
        const m = delay - 60 * h;
        return [h, m];
    }

    isDelayed(tolerance: boolean = false): boolean {
        if (tolerance)
            return this.getDelay() > 4 * 60 * 1000;
        return this.getDelay() > 0;
    }

}
