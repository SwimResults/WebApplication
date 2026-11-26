import type * as ApiUser from '@swimresults/api/user';
export type UserReport = Omit<ApiUser.UserReport, 'anonymous' | 'subject_type'> & {
  anonymous: boolean;
  subject_type?: UserReportSubjectType;
};

export enum UserReportSubjectType {
    START = "START",
    HEAT = "HEAT",
    EVENT = "EVENT",
    MEETING = "MEETING",
    ATHLETE = "ATHLETE",
    TEAM = "TEAM"
}
