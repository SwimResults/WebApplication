import {FileService} from "../../../../core/service/api";
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import { Component, OnDestroy, inject } from "@angular/core";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {FileIconComponent} from "../../../elements/file-icon/file-icon.component";
import {WidgetInfoTextComponent} from "../../widget-info-text/widget-info-text.component";

@Component({
    selector: 'sr-widget-file-small',
    templateUrl: './widget-file-small.component.html',
    styleUrls: ['./widget-file-small.component.scss'],
    imports: [FileIconComponent, WidgetInfoTextComponent, TranslateModule]
})
export class WidgetFileSmallComponent implements OnDestroy {
    private fileService = inject(FileService);
    private routeService = inject(RouteService);
    private translateService = inject(TranslateService);

    meetingId?: string;
    meetingIdSubscription: Subscription;

    file?: StorageFile;
    name?: string;
    notFoundMessage = {filename: ""};

    constructor() {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }

    fetchFile(name: string) {
        if (!this.meetingId) return;
        this.fileService.getFileByMeetingAndName(this.meetingId, name).subscribe(data => {
            this.file = data;
            this.file.url = this.fileService.getUrl(this.file);
        })
        this.translateService.get("FILES.FILE_NAMES." + name.toUpperCase()).subscribe(results => {
            if (results) {
                this.name = results;
            } else {
                if (this.file)
                    this.name = this.file.name;
            }
            if (this.name)
                this.notFoundMessage.filename = this.name;
        })
    }
}
