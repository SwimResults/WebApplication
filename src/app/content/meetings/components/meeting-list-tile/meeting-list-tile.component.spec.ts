import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingListTileComponent} from './meeting-list-tile.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

describe('MeetingListTileComponent', () => {
  let component: MeetingListTileComponent;
  let fixture: ComponentFixture<MeetingListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        ElementsModule,
        MatIconModule,
            TranslateModule.forRoot(),
            MeetingListTileComponent
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
