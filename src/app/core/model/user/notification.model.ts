export interface Notification {
    title: string,
    subtitle: string
    message: string
}

export interface MeetingNotification {
    subtitle: string
    message: string
    message_type: string,
    interruption_level: string
}

export interface NotificationResponse {
    user_count: number
    notification_user_count: number
    success_count: number
}
