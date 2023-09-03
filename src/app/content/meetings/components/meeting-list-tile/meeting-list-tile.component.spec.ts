import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListTileComponent } from './meeting-list-tile.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";

describe('MeetingListTileComponent', () => {
  let component: MeetingListTileComponent;
  let fixture: ComponentFixture<MeetingListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingListTileComponent ],
      imports: [
        ElementsModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
