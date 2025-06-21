import {Heat, HeatImpl} from "./heat.model";
import {Disqualification, DisqualificationImpl} from "./disqualification.model";
import {Result, ResultImpl} from "./result.model";

export enum ResultTypes {
    REGISTRATION = "registration",
    LIVETIMING = "livetiming_result",
    REACTION = "reaction",
    RESULT_LIST = "result_list",
    LAP = "lap"
}

export interface Start {
    _id: string;
    meeting: string;
    event: number;
    heat_number: number;
    heat: Heat;
    lane: number;
    is_relay: boolean;
    is_pre_list: boolean;
    athlete: string;
    athlete_name: string;
    athlete_year: number;
    athlete_team: string;
    athlete_team_name: string;
    rank: number;
    certified: boolean;
    results: Result[];
    disqualification: Disqualification;
    emptyLane: boolean;

}

export class StartImpl implements Start {
    _id: string;
    athlete: string;
    athlete_name: string;
    athlete_year: number;
    athlete_team: string;
    athlete_team_name: string;
    certified: boolean;
    disqualification: DisqualificationImpl = {} as DisqualificationImpl;
    results: ResultImpl[];
    event: number;
    heat: HeatImpl = {} as HeatImpl;
    heat_number: number;
    lane: number;
    is_relay: boolean;
    is_pre_list: boolean;
    meeting: string;
    rank: number;
    emptyLane: boolean;


    constructor(start: Start) {
        this._id = start._id;
        this.athlete = start.athlete;
        this.athlete_name = start.athlete_name;
        this.athlete_year = start.athlete_year
        this.athlete_team = start.athlete_team;
        this.athlete_team_name = start.athlete_team_name;
        this.certified = start.certified;
        if (start.disqualification)
            this.disqualification = new DisqualificationImpl(start.disqualification);
        this.event = start.event;
        if (start.heat)
            this.heat = new HeatImpl(start.heat);
        this.heat_number = start.heat_number;
        this.lane = start.lane;
        this.meeting = start.meeting;
        this.rank = start.rank;
        this.emptyLane = start.emptyLane;
        this.is_relay = start.is_relay;
        this.is_pre_list = start.is_pre_list;

        this.results = []
        if (start.results) {
            for (const result of start.results) {
                this.results.push(new ResultImpl(result))
            }
        }
    }

    isPreList(): boolean {
        return this.is_pre_list || this.heat.is_pre_list;
    }

    getTimeMilliseconds(resultType: ResultTypes): number {
        let latest: Date = new Date(0);
        let time = 0
        for (const result of this.results) {
            if (result.result_type == resultType) {
                if (latest.getTime() < result.addedAtTime.getTime()) {
                    latest = result.addedAtTime
                    time = result.time
                }
            }
        }

        return time
    }

    hasResultType(resultType: ResultTypes): boolean {
        for (const result of this.results) {
            if (result.result_type == resultType) {
                return true;
            }
        }
        return false;
    }

    hasResult(): boolean {
        for (const result of this.results) {
            if (result.result_type == ResultTypes.RESULT_LIST || result.result_type == ResultTypes.LIVETIMING) {
                return true;
            }
        }
        return false;
    }

    getMostRecentLap(): ResultImpl {
        //let highestLapMeters = 0;
        let latest: Date = new Date(0);
        let lapResult: ResultImpl = new ResultImpl({} as Result);
        for (const result of this.results) {
            // does not take care of the meters, only takes the latest lap entry!
            if (result.result_type == ResultTypes.LAP && latest.getTime() < result.addedAtTime.getTime()) {
                latest = result.addedAtTime;
                //highestLapMeters = result.lap_meters;
                lapResult = result;
            }
        }
        return lapResult;
    }

    getLapTimes(): IterableIterator<ResultImpl> {
        const res: Map<number, ResultImpl> = new Map<number, ResultImpl>();
        const results = this.results.sort((a, b) => {
            if (a.lap_meters === undefined) return 1;
            if (b.lap_meters === undefined) return -1;
            if (a.lap_meters === b.lap_meters) {
                return a.addedAtTime.getTime() - b.addedAtTime.getTime();
            }
            return a.lap_meters - b.lap_meters
        });
        console.log(results)
        for (const result of results) {
            if (result.result_type == ResultTypes.LAP) {
                res.set(result.lap_meters, result)
            }
        }
        return res.values();
    }

    getResultMilliseconds(): number {
        let latest: Date = new Date(0);
        let time = 0
        for (const result of this.results) {
            if (result.result_type == ResultTypes.RESULT_LIST || result.result_type == ResultTypes.LIVETIMING) {
                if (latest.getTime() < result.addedAtTime.getTime()) {
                    latest = result.addedAtTime
                    time = result.time
                }
            }
        }

        return time
    }
}
