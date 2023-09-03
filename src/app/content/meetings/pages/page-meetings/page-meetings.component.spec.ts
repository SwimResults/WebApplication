import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeetingsComponent } from './page-meetings.component';
import {MeetingsModule} from "../../meetings.module";
import {TranslateModule} from "@ngx-translate/core";

describe('PageMeetingsComponent', () => {
  let component: PageMeetingsComponent;
  let fixture: ComponentFixture<PageMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMeetingsComponent ],
      imports: [
        MeetingsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
