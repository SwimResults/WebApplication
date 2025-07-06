export interface Certificate {
    _id: string;
    name: string;
    athlete_id: string;
    meeting: string;
    path?: string;
    url?: string;
    hidden: boolean;
    downloads: number;
    ordering: number;
    added_at: string;
    updated_at: string;
}
