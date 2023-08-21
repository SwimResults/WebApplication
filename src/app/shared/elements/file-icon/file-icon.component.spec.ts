import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIconComponent } from './file-icon.component';
import {ElementsModule} from "../elements.module";

describe('FileIconComponent', () => {
  let component: FileIconComponent;
  let fixture: ComponentFixture<FileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileIconComponent ],
      imports: [
        ElementsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
