import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageMeetingsComponent} from './page-meetings.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PageMeetingsComponent', () => {
    let component: PageMeetingsComponent;
    let fixture: ComponentFixture<PageMeetingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageMeetingsComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageMeetingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
