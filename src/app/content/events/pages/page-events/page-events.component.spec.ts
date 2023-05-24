import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventsComponent } from './page-events.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PageEventsComponent', () => {
  let component: PageEventsComponent;
  let fixture: ComponentFixture<PageEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEventsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
