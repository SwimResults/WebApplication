import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminNotificationViewComponent} from './admin-notification-view.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('AdminNotificationViewComponent', () => {
    let component: AdminNotificationViewComponent;
    let fixture: ComponentFixture<AdminNotificationViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatIconModule,
                TranslateModule.forRoot(),
                ReactiveFormsModule,
                AdminNotificationViewComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
