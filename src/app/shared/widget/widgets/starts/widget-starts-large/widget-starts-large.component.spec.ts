import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetStartsLargeComponent} from './widget-starts-large.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";

import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetStartsLargeComponent', () => {
    let component: WidgetStartsLargeComponent;
    let fixture: ComponentFixture<WidgetStartsLargeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(),
        MatIconModule,
        OAuthModule.forRoot(), WidgetStartsLargeComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
            .compileComponents();

        fixture = TestBed.createComponent(WidgetStartsLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
