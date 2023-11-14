import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardEventComponent } from './page-dashboard-event.component';
import {WidgetModule} from "../../../../shared/widget/widget.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {DashboardModule} from "../../dashboard.module";

describe('PageDashboardEventComponent', () => {
  let component: PageDashboardEventComponent;
  let fixture: ComponentFixture<PageDashboardEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashboardEventComponent ],
      imports: [
        WidgetModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        DashboardModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
