import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminNotificationComponent } from './page-admin-notification.component';
import {AdminModule} from "../../admin.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('PageAdminNotificationComponent', () => {
  let component: PageAdminNotificationComponent;
  let fixture: ComponentFixture<PageAdminNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AdminModule,
          RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAdminNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
