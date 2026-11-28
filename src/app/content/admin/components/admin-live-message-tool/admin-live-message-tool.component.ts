import {Component, Input, OnChanges, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon} from '@angular/material/icon';
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {LiveMessageMode, LiveService, LiveStatusImpl} from '@swimresults/angular';

/** Admin: set or clear the manual message of the live bar (start-service live status). */
@Component({
    selector: 'sr-admin-live-message-tool',
    templateUrl: './admin-live-message-tool.component.html',
    styleUrls: ['./admin-live-message-tool.component.scss'],
    imports: [ReactiveFormsModule, BtnComponent, MatIcon]
})
export class AdminLiveMessageToolComponent implements OnChanges {
    private liveService = inject(LiveService);
    private fb = inject(FormBuilder);

    static readonly MAX_LENGTH = 500;

    @Input() meetingId?: string;

    status?: LiveStatusImpl;
    saving = false;
    error?: string;

    form = this.fb.nonNullable.group({
        text: ['', [Validators.required, Validators.maxLength(AdminLiveMessageToolComponent.MAX_LENGTH)]],
        mode: ['REPLACE' as LiveMessageMode, Validators.required],
    });

    readonly maxLength = AdminLiveMessageToolComponent.MAX_LENGTH;

    ngOnChanges() {
        this.load();
    }

    load() {
        if (!this.meetingId) return;
        this.liveService.getLiveStatus(this.meetingId).subscribe({
            next: s => this.setStatus(new LiveStatusImpl(s)),
            error: e => this.error = e?.message ?? 'Live-Status konnte nicht geladen werden',
        });
    }

    save() {
        if (!this.meetingId || this.saving || this.form.invalid) return;
        const {text, mode} = this.form.getRawValue();
        this.saving = true;
        this.error = undefined;
        this.liveService.setMessage(this.meetingId, text.trim(), mode).subscribe({
            next: s => {
                this.saving = false;
                this.setStatus(new LiveStatusImpl(s));
            },
            error: e => {
                this.saving = false;
                this.error = e?.message ?? 'Nachricht konnte nicht gespeichert werden';
            },
        });
    }

    clear() {
        if (!this.meetingId || this.saving || !this.status?.message) return;
        this.saving = true;
        this.error = undefined;
        this.liveService.clearMessage(this.meetingId).subscribe({
            next: () => {
                this.saving = false;
                this.form.reset();
                this.load();
            },
            error: e => {
                this.saving = false;
                this.error = e?.message ?? 'Nachricht konnte nicht gelöscht werden';
            },
        });
    }

    private setStatus(s: LiveStatusImpl) {
        this.status = s;
        if (s.message) {
            this.form.setValue({text: s.message.text, mode: s.message.mode});
        }
    }
}
