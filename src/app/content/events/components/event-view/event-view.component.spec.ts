import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventViewComponent} from './event-view.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('EventViewComponent', () => {
    let component: EventViewComponent;
    let fixture: ComponentFixture<EventViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatButtonToggleModule,
                TranslateModule.forRoot(),
                MatIconModule, EventViewComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EventViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
