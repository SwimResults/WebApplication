import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileListViewComponent} from './file-list-view.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {TranslateModule} from "@ngx-translate/core";
import {FilesModule} from "../../files.module";

describe('FileListViewComponent', () => {
  let component: FileListViewComponent;
  let fixture: ComponentFixture<FileListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        RouterTestingModule,
        ElementsModule,
        TranslateModule.forRoot(),
            FilesModule,
            FileListViewComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
