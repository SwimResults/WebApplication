import {Injectable, inject} from '@angular/core';
import {EMPTY, Observable, catchError, map, shareReplay, switchMap, timer} from "rxjs";
import {LiveService, LiveStatusImpl} from '@swimresults/angular';

/**
 * Polls the server-side live status of a meeting. One poll per meeting is shared by all subscribers (live bar,
 * live page) and stops when nobody subscribes. A failed fetch keeps the last status, so "updated at" shows the
 * last successful fetch.
 */
@Injectable({
    providedIn: 'root'
})
export class LiveStatusService {
    private liveService = inject(LiveService);

    static readonly POLL_INTERVAL = 15000;

    private streams = new Map<string, Observable<LiveStatusImpl>>();

    watch(meetingId: string): Observable<LiveStatusImpl> {
        let stream = this.streams.get(meetingId);
        if (!stream) {
            stream = timer(0, LiveStatusService.POLL_INTERVAL).pipe(
                switchMap(() => this.liveService.getLiveStatus(meetingId).pipe(
                    map(s => new LiveStatusImpl(s)),
                    catchError(() => EMPTY),
                )),
                shareReplay({bufferSize: 1, refCount: true}),
            );
            this.streams.set(meetingId, stream);
        }
        return stream;
    }
}
