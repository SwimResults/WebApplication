import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingListViewComponent} from './meeting-list-view.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('MeetingListViewComponent', () => {
  let component: MeetingListViewComponent;
  let fixture: ComponentFixture<MeetingListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(),
            MeetingListViewComponent
        ],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
