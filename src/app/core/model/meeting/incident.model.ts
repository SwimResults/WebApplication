import {createDateForBerlin} from "../../function/date.functions";

export interface Incident {
    _id: string;
    meeting: string;
    type: "EVENT" | "DURATION" | "TIMELESS";
    name: string;
    name_extension: string;
    start: string;
    end: string;
    prev_event: number;
    next_event: number;
}

export class IncidentImpl {
    _id: string;
    meeting: string;
    type: "EVENT" | "DURATION" | "TIMELESS";
    name: string;
    name_extension: string;
    start: string;
    end: string;
    prev_event: number;
    next_event: number;

    constructor(data: Incident) {
        this._id = data._id;
        this.meeting = data.meeting;
        this.type = data.type;
        this.name = data.name;
        this.name_extension = data.name_extension;
        this.start = data.start;
        this.end = data.end;
        this.prev_event = data.prev_event;
        this.next_event = data.next_event;
    }

    public getStartDate(): Date {
        return createDateForBerlin(this.start);
    }

    public getEndDate(): Date {
        return createDateForBerlin(this.end)
    }

    public getStartTimeString(): string {
        const d = this.getStartDate();
        const h = d.getHours();
        const m = "0" + d.getMinutes();
        return h + ":" + m.substr(-2);
    }

    public getDurationString(): string {
        const s = this.getStartDate();
        const e = this.getEndDate();
        const millis = e.getTime() - s.getTime();
        return millis / 60000 + "min";
    }
}
