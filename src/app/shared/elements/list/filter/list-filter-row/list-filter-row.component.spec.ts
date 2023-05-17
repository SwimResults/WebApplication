import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterRowComponent } from './list-filter-row.component';
import {ElementsModule} from "../../../elements.module";
import {TranslateModule} from "@ngx-translate/core";

describe('ListFilterRowComponent', () => {
  let component: ListFilterRowComponent;
  let fixture: ComponentFixture<ListFilterRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilterRowComponent ],
      imports: [
        ElementsModule,
        TranslateModule.forRoot()
      ]
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
