import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFilesComponent } from './pages';
import { FileListComponent, FileListTileComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PageFilesComponent,
    FileListComponent,
    FileListTileComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    MatIconModule
  ]
})
export class FilesModule { }
