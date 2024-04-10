import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetStartsLargeComponent} from './widget-starts-large.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {WidgetModule} from "../../../widget.module";
import {RouterTestingModule} from "@angular/router/testing";
import {OAuthModule} from "angular-oauth2-oidc";

describe('WidgetStartsLargeComponent', () => {
    let component: WidgetStartsLargeComponent;
    let fixture: ComponentFixture<WidgetStartsLargeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WidgetStartsLargeComponent],
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
                MatIconModule,
                WidgetModule,
                RouterTestingModule,
                OAuthModule.forRoot()
            ]
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
