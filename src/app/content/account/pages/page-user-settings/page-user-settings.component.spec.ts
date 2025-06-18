import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserSettingsComponent} from './page-user-settings.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PageUserSettingsComponent', () => {
    let component: PageUserSettingsComponent;
    let fixture: ComponentFixture<PageUserSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageUserSettingsComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageUserSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
