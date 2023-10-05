import {Component, Input, OnInit} from '@angular/core';
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-file-list-tile',
  templateUrl: './file-list-tile.component.html',
  styleUrls: ['./file-list-tile.component.scss']
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
        if (results) {
          this.name = results;
        } else {
            this.name = this.file.name;
        }
      })
    }
  }

  clickDownload() {
    if (this.file.url) return;
    this.file.downloads++;
  }
}
