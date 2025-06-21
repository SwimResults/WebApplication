import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileListViewComponent} from './file-list-view.component';

import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('FileListViewComponent', () => {
    let component: FileListViewComponent;
    let fixture: ComponentFixture<FileListViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                FileListViewComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FileListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
