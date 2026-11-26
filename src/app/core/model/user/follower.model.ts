import type * as ApiUser from '@swimresults/api/user';
export type Follower = ApiUser.FollowingAthlete;

export interface AthleteRelation {
    athleteId: string;
    type: AthleteRelationType;
}

export enum AthleteRelationType {
    FOLLOW,
    SELF
}
