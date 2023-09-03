import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListViewComponent } from './meeting-list-view.component';
import {TranslateModule} from "@ngx-translate/core";
import {MeetingsModule} from "../../meetings.module";

describe('MeetingListViewComponent', () => {
  let component: MeetingListViewComponent;
  let fixture: ComponentFixture<MeetingListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingListViewComponent ],
      imports: [
        TranslateModule.forRoot(),
        MeetingsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
