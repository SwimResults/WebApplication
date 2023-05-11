import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardGeneralComponent } from './page-dashboard-general.component';
import {TranslateModule} from "@ngx-translate/core";

describe('PageDashboardGeneralComponent', () => {
  let component: PageDashboardGeneralComponent;
  let fixture: ComponentFixture<PageDashboardGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashboardGeneralComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
