import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListComponent } from './file-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {TranslateModule} from "@ngx-translate/core";

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileListComponent ],
      imports: [
        RouterTestingModule,
        ElementsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
