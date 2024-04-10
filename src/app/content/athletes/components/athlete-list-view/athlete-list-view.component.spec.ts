import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AthleteListViewComponent} from './athlete-list-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AthletesModule} from "../../athletes.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {OAuthModule} from "angular-oauth2-oidc";

describe('AthleteListViewComponent', () => {
    let component: AthleteListViewComponent;
    let fixture: ComponentFixture<AthleteListViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AthleteListViewComponent],
            imports: [
                HttpClientTestingModule,
                AthletesModule,
                TranslateModule.forRoot(),
                RouterTestingModule,
                OAuthModule.forRoot()
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AthleteListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
