export interface Follower {
  athlete_id: string;
  added_at: string;
}

export interface AthleteRelation {
    athleteId: string;
    type: AthleteRelationType;
}

export enum AthleteRelationType {
    FOLLOW,
    SELF
}
