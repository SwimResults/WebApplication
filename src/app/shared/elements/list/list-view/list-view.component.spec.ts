import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewComponent} from './list-view.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";


describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            ListViewComponent
        ],
        providers: [provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
