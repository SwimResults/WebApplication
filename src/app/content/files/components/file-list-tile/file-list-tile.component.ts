import {Component, Input, OnInit} from '@angular/core';
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {TranslateService} from "@ngx-translate/core";
import {fileTypes} from "../../../../core/constant/file-types.constant";
import {FileIconComponent} from '../../../../shared/elements/file-icon/file-icon.component';
import {BadgeComponent} from '../../../../shared/elements/badge/badge.component';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'sr-file-list-tile',
    templateUrl: './file-list-tile.component.html',
    styleUrls: ['./file-list-tile.component.scss'],
    imports: [FileIconComponent, BadgeComponent, MatIcon]
})
export class FileListTileComponent implements OnInit {

    @Input() file!: StorageFile

    name: string = "";

    getUrl() {
        if (!this.file.existing) return "";
        let url = this.file.url;
        if (!this.file.url) url = "https://download.swimresults.de" + this.file.path;
        return url;
    }

    constructor(
        private translateService: TranslateService
    ) {
    }

    ngOnInit() {
        if (this.file && this.file.name) {
            this.translateService.get("FILES.FILE_NAMES." + this.file.name.toUpperCase()).subscribe(results => {
                if (results.includes("FILES.FILE_NAMES.")) {
                    this.name = this.file.name;
                } else {
                    this.name = results;
                }
            })
        }
    }

    clickDownload() {
        if (this.file.url) return;
        this.file.downloads++;
    }

    protected readonly fileTypes = fileTypes;
}
