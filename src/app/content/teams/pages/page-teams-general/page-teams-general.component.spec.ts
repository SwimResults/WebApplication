import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageTeamsGeneralComponent} from './page-teams-general.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('PageTeamsGeneralComponent', () => {
    let component: PageTeamsGeneralComponent;
    let fixture: ComponentFixture<PageTeamsGeneralComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageTeamsGeneralComponent],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageTeamsGeneralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
