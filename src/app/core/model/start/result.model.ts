
export interface Result {
  result_type: string;
  time: number;
  added_at: string;
}

export class ResultImpl implements Result {
  added_at: string;
  result_type: string;
  time: number;
  addedAtTime: Date


  constructor(result: Result) {
    this.added_at = result.added_at;
    this.result_type = result.result_type;
    this.time = result.time;
    this.addedAtTime = new Date(result.added_at)
  }
}
