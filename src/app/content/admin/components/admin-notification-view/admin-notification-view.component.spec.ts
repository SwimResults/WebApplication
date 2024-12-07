import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationViewComponent } from './admin-notification-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AdminModule} from "../../admin.module";

describe('AdminNotificationViewComponent', () => {
  let component: AdminNotificationViewComponent;
  let fixture: ComponentFixture<AdminNotificationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNotificationViewComponent],
        imports: [
            AdminModule,
            HttpClientTestingModule,
            ElementsModule,
            MatIconModule,
            TranslateModule.forRoot(),
            ReactiveFormsModule,
            RouterTestingModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
