import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {MatIconModule} from "@angular/material/icon";
import {ElementsModule} from "../../elements/elements.module";
import {LayoutModule} from "../layout.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [
        MatIconModule,
        ElementsModule,
        LayoutModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});