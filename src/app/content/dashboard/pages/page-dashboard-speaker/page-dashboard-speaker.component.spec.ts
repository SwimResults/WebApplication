import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageDashboardSpeakerComponent} from './page-dashboard-speaker.component';
import {DashboardModule} from "../../dashboard.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('PageDashboardSpeakerComponent', () => {
  let component: PageDashboardSpeakerComponent;
  let fixture: ComponentFixture<PageDashboardSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            DashboardModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            PageDashboardSpeakerComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
