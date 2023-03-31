import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDefaultComponent } from './nav-default.component';
import {ElementsModule} from "../../../elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavDefaultComponent', () => {
  let component: NavDefaultComponent;
  let fixture: ComponentFixture<NavDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDefaultComponent ],
      imports: [
        ElementsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
