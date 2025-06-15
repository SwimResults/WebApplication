import {FileService} from "../../../../core/service/api";
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {Component, OnDestroy} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'sr-widget-file-small',
    templateUrl: './widget-file-small.component.html',
    styleUrls: ['./widget-file-small.component.scss'],
    standalone: false
})
export class WidgetFileSmallComponent implements OnDestroy {
    meetingId?: string;
    meetingIdSubscription: Subscription;

    file?: StorageFile;
    name?: string;
    notFoundMessage = {filename: ""};

    constructor(
        private fileService: FileService,
        private routeService: RouteService,
        private translateService: TranslateService
    ) {
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
