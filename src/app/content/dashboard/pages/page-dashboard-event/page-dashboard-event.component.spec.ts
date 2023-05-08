import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardEventComponent } from './page-dashboard-event.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";

describe('PageDashboardEventComponent', () => {
  let component: PageDashboardEventComponent;
  let fixture: ComponentFixture<PageDashboardEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashboardEventComponent ],
      imports: [
        ElementsModule,
        RouterTestingModule,
        HttpClientTestingModule
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
