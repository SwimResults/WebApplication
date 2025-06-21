import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavComponent} from './nav.component';
import {MatIconModule} from "@angular/material/icon";

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../app.routes";

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatIconModule,
                TranslateModule.forRoot(), NavComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
