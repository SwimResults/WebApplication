import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1Component } from './example1.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";

describe('Example1Component', () => {
  let component: Example1Component;
  let fixture: ComponentFixture<Example1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example1Component ],
      imports: [
        HttpClientTestingModule,
        ElementsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
