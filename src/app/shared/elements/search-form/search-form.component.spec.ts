import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchFormComponent} from './search-form.component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconTestingModule} from "@angular/material/icon/testing";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../app.routes";


describe('SearchFormComponent', () => {
    let component: SearchFormComponent;
    let fixture: ComponentFixture<SearchFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                MatIconTestingModule,
                MatIconModule,
                SearchFormComponent
            ],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
