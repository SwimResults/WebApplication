import {LiveStatusImpl} from '@swimresults/angular';

export interface LiveText {
    key: string;
    params?: Record<string, string | number>;
}

/** ngx-translate language → locale for weekday names */
const LOCALES: Record<string, string> = {de: 'de-DE', en: 'en-GB', cs: 'cs-CZ', ua: 'uk-UA', ru: 'ru-RU'};

/**
 * Translation key and parameters for the status message of the live bar (bar mode `STATUS`).
 * The wording depends on how many calendar days ahead the next start is (in the meeting's time zone).
 */
export function liveStatusText(status: LiveStatusImpl, lang: string = 'de', now: Date = new Date()): LiveText | undefined {
    const time = status.getStartsAtTime();
    const days = status.getStartsAtDayOffset(now);
    const weekday = status.getStartsAtWeekday(LOCALES[lang] ?? LOCALES['de']);

    switch (status.type) {
        case 'END':
            return {key: 'LIVE.STATUS.END'};
        case 'BREAK':
            return time ? {key: 'LIVE.STATUS.BREAK', params: {time}} : {key: 'LIVE.STATUS.BREAK_NO_TIME'};
        case 'DAY_END':
            if (!time || days === undefined) return {key: 'LIVE.STATUS.DAY_END_NO_TIME'};
            if (days <= 1) return {key: 'LIVE.STATUS.DAY_END', params: {time}};
            return {key: 'LIVE.STATUS.DAY_END_WEEKDAY', params: {time, weekday}};
        case 'BEFORE_START':
            if (!time || days === undefined) return {key: 'LIVE.STATUS.BEFORE_START_NO_TIME'};
            if (days <= 0) return {key: 'LIVE.STATUS.BEFORE_START', params: {time}};
            if (days === 1) return {key: 'LIVE.STATUS.BEFORE_START_TOMORROW', params: {time}};
            return {key: 'LIVE.STATUS.BEFORE_START_WEEKDAY', params: {time, weekday}};
        default:
            return undefined;
    }
}
