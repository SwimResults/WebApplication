import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetStartsLargeComponent} from './widget-starts-large.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {WidgetModule} from "../../../widget.module";
import {RouterTestingModule} from "@angular/router/testing";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetStartsLargeComponent', () => {
    let component: WidgetStartsLargeComponent;
    let fixture: ComponentFixture<WidgetStartsLargeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(),
        MatIconModule,
        WidgetModule,
        RouterTestingModule,
        OAuthModule.forRoot(), WidgetStartsLargeComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
