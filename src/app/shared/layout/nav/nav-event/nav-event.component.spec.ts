import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEventComponent } from './nav-event.component';
import {ElementsModule} from "../../../elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NavEventComponent', () => {
  let component: NavEventComponent;
  let fixture: ComponentFixture<NavEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEventComponent ],
      imports: [
        ElementsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
