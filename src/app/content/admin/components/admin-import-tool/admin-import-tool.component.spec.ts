import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportToolComponent } from './admin-import-tool.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

describe('AdminImportToolComponent', () => {
  let component: AdminImportToolComponent;
  let fixture: ComponentFixture<AdminImportToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImportToolComponent ],
      imports: [
        HttpClientTestingModule,
        ElementsModule,
        MatRadioModule,
        MatIconModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminImportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
