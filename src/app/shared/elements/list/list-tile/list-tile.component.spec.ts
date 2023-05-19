import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileComponent } from './list-tile.component';
import {ElementsModule} from "../../elements.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ListTileComponent', () => {
  let component: ListTileComponent;
  let fixture: ComponentFixture<ListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTileComponent ],
      imports: [
        ElementsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
