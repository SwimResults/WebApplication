import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarComponent} from './sidebar.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../app.routes";

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(), SidebarComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
