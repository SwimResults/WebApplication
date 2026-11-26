import type * as ApiMeeting from '@swimresults/api/meeting';
import {Style} from "./style.model";
import {EventFinal} from "./event-final.model";

export type MeetingEvent = ApiMeeting.Event;

export class MeetingEventImpl implements MeetingEvent {
    added_at: string = "";
    updated_at: string = "";
    part: ApiMeeting.MeetingPart = {};
    _id: string;
    distance: number;
    gender: string;
    meeting: string;
    number: number;
    relay_distance: string;
    style: Style;
    final: EventFinal
    name_extension: string;
    finished: boolean;
    certified: boolean;
    no_start_list: boolean;

    constructor(event: MeetingEvent) {
        this.added_at = event.added_at;
        this.updated_at = event.updated_at;
        this.part = event.part;
        this._id = event._id;
        this.distance = event.distance ?? 0;
        this.gender = event.gender ?? '';
        this.meeting = event.meeting ?? '';
        this.number = event.number ?? 0;
        this.relay_distance = event.relay_distance ?? '';
        this.style = event.style;
        this.final = event.final;
        this.name_extension = event.name_extension ?? '';
        this.finished = event.finished ?? false;
        this.certified = event.certified ?? false;
        this.no_start_list = event.no_start_list ?? false;
    }
}
