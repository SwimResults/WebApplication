import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchFormComponent} from './search-form.component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconTestingModule} from "@angular/material/icon/testing";
import {MatIconModule} from "@angular/material/icon";
import {RouterTestingModule} from "@angular/router/testing";

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
            RouterTestingModule,
            SearchFormComponent
        ]
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
