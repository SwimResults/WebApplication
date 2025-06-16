import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeakerDashboardComponent} from './speaker-dashboard.component';
import {DashboardModule} from "../../dashboard.module";
import {WidgetModule} from "../../../../shared/widget/widget.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('SpeakerDashboardComponent', () => {
  let component: SpeakerDashboardComponent;
  let fixture: ComponentFixture<SpeakerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            DashboardModule,
            WidgetModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            SpeakerDashboardComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
