import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartListTileComponent } from './start-list-tile.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";

describe('StartListTileComponent', () => {
  let component: StartListTileComponent;
  let fixture: ComponentFixture<StartListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartListTileComponent ],
      imports: [
        HttpClientTestingModule,
        ElementsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
