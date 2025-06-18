import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetWeblinksSmallComponent} from './widget-weblinks-small.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetWeblinksSmallComponent', () => {
    let component: WidgetWeblinksSmallComponent;
    let fixture: ComponentFixture<WidgetWeblinksSmallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(), WidgetWeblinksSmallComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WidgetWeblinksSmallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
