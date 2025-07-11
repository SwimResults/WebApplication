import {Component, OnInit} from '@angular/core';
import {WidgetFileSmallComponent} from "../widget-file-small.component";
import {FileIconComponent} from '../../../../elements/file-icon/file-icon.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-file-announcement-small',
    templateUrl: './../widget-file-small.component.html',
    styleUrls: ['./../widget-file-small.component.scss'],
    imports: [FileIconComponent, WidgetInfoTextComponent, TranslateModule]
})
export class WidgetFileAnnouncementSmallComponent extends WidgetFileSmallComponent implements OnInit {
    ngOnInit() {
        this.fetchFile("MEETING_INFO")
    }
}
