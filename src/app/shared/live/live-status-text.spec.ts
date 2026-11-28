import {LiveStatus, LiveStatusImpl} from '@swimresults/angular';
import {liveStatusText} from './live-status-text';

const now = new Date('2026-11-28T10:00:00Z'); // Saturday, 11:00 in Berlin

function status(type: string, startsAt: string | null): LiveStatusImpl {
    return new LiveStatusImpl({
        meeting: 'IESC26', meeting_state: 'RUNNING', server_time: now.toISOString(), time_zone: 'Europe/Berlin',
        type, starts_at: startsAt, heat_count: 0, warnings: null, data_delayed: false,
    } as LiveStatus, now);
}

describe('liveStatusText', () => {
    it('END', () => {
        expect(liveStatusText(status('END', null), 'de', now)).toEqual({key: 'LIVE.STATUS.END'});
    });

    it('BREAK with zero-padded time in Berlin', () => {
        expect(liveStatusText(status('BREAK', '2026-11-28T08:05:00Z'), 'de', now))
            .toEqual({key: 'LIVE.STATUS.BREAK', params: {time: '09:05'}});
        expect(liveStatusText(status('BREAK', null), 'de', now)).toEqual({key: 'LIVE.STATUS.BREAK_NO_TIME'});
    });

    it('BEFORE_START today, tomorrow and later', () => {
        expect(liveStatusText(status('BEFORE_START', '2026-11-28T13:00:00Z'), 'de', now))
            .toEqual({key: 'LIVE.STATUS.BEFORE_START', params: {time: '14:00'}});
        expect(liveStatusText(status('BEFORE_START', '2026-11-29T08:00:00Z'), 'de', now))
            .toEqual({key: 'LIVE.STATUS.BEFORE_START_TOMORROW', params: {time: '09:00'}});
        expect(liveStatusText(status('BEFORE_START', '2026-12-05T08:00:00Z'), 'en', now))
            .toEqual({key: 'LIVE.STATUS.BEFORE_START_WEEKDAY', params: {time: '09:00', weekday: 'Saturday'}});
    });

    it('DAY_END says "morgen" only for the next day', () => {
        expect(liveStatusText(status('DAY_END', '2026-11-29T08:00:00Z'), 'de', now))
            .toEqual({key: 'LIVE.STATUS.DAY_END', params: {time: '09:00'}});
        // a month later on the same day of month: not "morgen" (old web bug)
        expect(liveStatusText(status('DAY_END', '2026-12-28T08:00:00Z'), 'de', now))
            .toEqual({key: 'LIVE.STATUS.DAY_END_WEEKDAY', params: {time: '09:00', weekday: 'Montag'}});
    });

    it('no text for HEAT and NONE', () => {
        expect(liveStatusText(status('HEAT', null), 'de', now)).toBeUndefined();
        expect(liveStatusText(status('NONE', null), 'de', now)).toBeUndefined();
    });
});
