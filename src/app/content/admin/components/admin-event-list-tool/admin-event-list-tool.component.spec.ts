import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventListToolComponent } from './admin-event-list-tool.component';

describe('AdminEventListToolComponent', () => {
  let component: AdminEventListToolComponent;
  let fixture: ComponentFixture<AdminEventListToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventListToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventListToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
