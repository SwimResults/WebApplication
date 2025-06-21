import {Component, Input, OnInit} from '@angular/core';
import {FileType, fileTypes} from "../../../core/constant/file-types.constant";
import {IconPanelComponent} from '../icon-panel/icon-panel.component';

@Component({
    selector: 'sr-file-icon',
    templateUrl: './file-icon.component.html',
    styleUrls: ['./file-icon.component.scss'],
    imports: [IconPanelComponent]
})
export class FileIconComponent implements OnInit {

    @Input() extension!: string;
    @Input() icon?: string;
    @Input() existing: boolean = false;

    fileType: FileType = {
        icon: "insert_drive_file",
        color: "",
        download: true
    }

    ngOnInit() {
        if (fileTypes.has(this.extension)) {
            const ft = fileTypes.get(this.extension);

            if (ft)
                this.fileType = ft;
        }
    }

    getIcon() {
        if (this.icon) return this.icon;
        return this.fileType.icon;
    }

    getStyle() {
        return this.existing ? this.fileType.color : 'inactive';
    }

}
