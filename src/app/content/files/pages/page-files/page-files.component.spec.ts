import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageFilesComponent} from './page-files.component';

import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('PageFilesComponent', () => {
    let component: PageFilesComponent;
    let fixture: ComponentFixture<PageFilesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PageFilesComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PageFilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
