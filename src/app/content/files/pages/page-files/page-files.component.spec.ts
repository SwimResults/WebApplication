import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageFilesComponent} from './page-files.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {FilesModule} from "../../files.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('PageFilesComponent', () => {
  let component: PageFilesComponent;
  let fixture: ComponentFixture<PageFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        ElementsModule,
        FilesModule,
        RouterTestingModule,
            TranslateModule.forRoot(),
            PageFilesComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
