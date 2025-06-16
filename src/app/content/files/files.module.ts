import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageFilesComponent} from './pages';
import {FileListComponent, FileListTileComponent} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {FileListViewComponent} from './components/file-list-view/file-list-view.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    imports: [
        CommonModule,
        ElementsModule,
        MatIconModule,
        TranslateModule,
        PageFilesComponent,
        FileListComponent,
        FileListTileComponent,
        FileListViewComponent
    ]
})
export class FilesModule { }
