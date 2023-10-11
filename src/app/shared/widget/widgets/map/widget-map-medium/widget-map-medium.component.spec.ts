import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMapMediumComponent } from './widget-map-medium.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('WidgetMapMediumComponent', () => {
  let component: WidgetMapMediumComponent;
  let fixture: ComponentFixture<WidgetMapMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMapMediumComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMapMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
