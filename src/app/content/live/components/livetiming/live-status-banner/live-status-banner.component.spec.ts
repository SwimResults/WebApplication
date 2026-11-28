import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from "@ngx-translate/core";
import {LiveStatus, LiveStatusImpl} from '@swimresults/angular';
import {LiveStatusBannerComponent} from './live-status-banner.component';

function status(fields: Partial<Record<keyof LiveStatus, unknown>>): LiveStatusImpl {
    return new LiveStatusImpl({
        meeting: 'IESC26', meeting_state: 'RUNNING', server_time: '2026-11-28T10:00:00Z', time_zone: 'Europe/Berlin',
        type: 'HEAT', heat_count: 4, warnings: null, data_delayed: false, ...fields,
    } as unknown as LiveStatus);
}

describe('LiveStatusBannerComponent', () => {
    let fixture: ComponentFixture<LiveStatusBannerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot(), LiveStatusBannerComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(LiveStatusBannerComponent);
    });

    function render(s: LiveStatusImpl): string {
        fixture.componentRef.setInput('status', s);
        fixture.detectChanges();
        return fixture.nativeElement.textContent;
    }

    it('shows status, warnings, delay and update time', () => {
        const text = render(status({
            type: 'BREAK', starts_at: '2026-11-28T13:00:00Z', warnings: ['Nur Bahn 1 zum Einschwimmen'],
        }));
        expect(text).toContain('LIVE.STATUS.BREAK');
        expect(text).toContain('Nur Bahn 1 zum Einschwimmen');
        expect(text).toContain('LIVE.UPDATED_AT');
        expect(text).not.toContain('LIVE.DATA_DELAYED');
    });

    it('shows a REPLACE message instead of the status, and an INFO message as extra line', () => {
        expect(render(status({type: 'BREAK', starts_at: '2026-11-28T13:00:00Z',
            message: {text: 'Siegerehrung', mode: 'REPLACE', updated_at: '2026-11-28T09:00:00Z'}})))
            .not.toContain('LIVE.STATUS.BREAK');
        const info = render(status({type: 'HEAT', data_delayed: true, last_data_at: '2026-11-28T09:55:00Z',
            message: {text: 'Bitte Bahn 8 freihalten', mode: 'INFO', updated_at: '2026-11-28T09:00:00Z'}}));
        expect(info).toContain('Bitte Bahn 8 freihalten');
        expect(info).toContain('LIVE.DATA_DELAYED');
    });
});
