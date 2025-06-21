export interface UserReport {
    _id: string;
    anonymous: boolean; // only for submission request in dto
    message: string;
    user_id?: string; // not part of the submission request dto
    subject_id?: string;
    subject_type?: UserReportSubjectType;
    acknowledged: boolean;
    completed: boolean;
    added_at: string;
}

export enum UserReportSubjectType {
    START = "START",
    HEAT = "HEAT",
    EVENT = "EVENT",
    MEETING = "MEETING",
    ATHLETE = "ATHLETE",
    TEAM = "TEAM"
}
