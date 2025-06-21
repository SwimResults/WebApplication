import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAdminNotificationComponent} from './page-admin-notification.component';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";


describe('PageAdminNotificationComponent', () => {
    let component: PageAdminNotificationComponent;
    let fixture: ComponentFixture<PageAdminNotificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
