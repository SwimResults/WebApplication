import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListComponent } from './meeting-list.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MeetingListComponent', () => {
  let component: MeetingListComponent;
  let fixture: ComponentFixture<MeetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MeetingListComponent],
    imports: [ElementsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(MeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
