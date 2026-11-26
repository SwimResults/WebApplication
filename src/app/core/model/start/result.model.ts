import type * as ApiStart from '@swimresults/api/start';

export type Result = ApiStart.Result;

export class ResultImpl implements Result {
  added_at: string;
  result_type: string;
  lap_meters: number;
  time: number;
  addedAtTime: Date


  constructor(result: Result) {
    this.added_at = result.added_at;
    this.result_type = result.result_type ?? '';
    this.lap_meters = result.lap_meters ?? 0;
    this.time = result.time ?? 0;
    this.addedAtTime = new Date(result.added_at)
  }
}
