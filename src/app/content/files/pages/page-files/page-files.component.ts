import {Component} from '@angular/core';
import {FileListViewComponent} from '../../components/file-list-view/file-list-view.component';

@Component({
    selector: 'sr-page-files',
    templateUrl: './page-files.component.html',
    styleUrls: ['./page-files.component.scss'],
    imports: [FileListViewComponent]
})
export class PageFilesComponent {

}
