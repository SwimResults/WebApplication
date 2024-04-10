import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFavoritesLargeComponent} from './widget-favorites-large.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";
import {OAuthModule} from "angular-oauth2-oidc";

describe('WidgetFavoritesLargeComponent', () => {
    let component: WidgetFavoritesLargeComponent;
    let fixture: ComponentFixture<WidgetFavoritesLargeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WidgetFavoritesLargeComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                WidgetModule,
                TranslateModule.forRoot(),

                OAuthModule.forRoot()
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WidgetFavoritesLargeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
