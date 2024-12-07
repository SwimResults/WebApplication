import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationSenderComponent } from './admin-notification-sender.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";

describe('AdminNotificationSenderComponent', () => {
  let component: AdminNotificationSenderComponent;
  let fixture: ComponentFixture<AdminNotificationSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNotificationSenderComponent],
        imports: [
            HttpClientTestingModule,
            ElementsModule,
            MatIconModule,
            TranslateModule.forRoot(),
            ReactiveFormsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotificationSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
