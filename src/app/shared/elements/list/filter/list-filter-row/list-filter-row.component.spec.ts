import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListFilterRowComponent} from './list-filter-row.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";


describe('ListFilterRowComponent', () => {
    let component: ListFilterRowComponent;
    let fixture: ComponentFixture<ListFilterRowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                ListFilterRowComponent
            ],
            providers: [provideRouter(routes)]
        })
          .compileComponents();

        fixture = TestBed.createComponent(ListFilterRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
