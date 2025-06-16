import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminNotificationSenderComponent} from './admin-notification-sender.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('AdminNotificationSenderComponent', () => {
  let component: AdminNotificationSenderComponent;
  let fixture: ComponentFixture<AdminNotificationSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        MatIconModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule, AdminNotificationSenderComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
