import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavLinkComponent} from './nav-link.component';
import {MatIconModule} from "@angular/material/icon";

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('NavLinkComponent', () => {
    let component: NavLinkComponent;
    let fixture: ComponentFixture<NavLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatIconModule,
                TranslateModule.forRoot(),
                NavLinkComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
