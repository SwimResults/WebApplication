export interface UserReport {
    _id: string;
    anonymous: boolean; // only for submission request in dto
    message: string;
    user_id: string; // not part of submission request dto
    subject_id: string;
    subject_type: string;
}
