import {Component} from '@angular/core';
import {FileListComponent} from '../file-list/file-list.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-file-list-view',
    templateUrl: './file-list-view.component.html',
    styleUrls: ['./file-list-view.component.scss'],
    imports: [FileListComponent, TranslateModule]
})
export class FileListViewComponent {

}
