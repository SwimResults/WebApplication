import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeatToolComponent } from './admin-heat-tool.component';

describe('AdminHeatToolComponent', () => {
  let component: AdminHeatToolComponent;
  let fixture: ComponentFixture<AdminHeatToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeatToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeatToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
