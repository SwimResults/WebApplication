import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportToolComponent } from './admin-import-tool.component';

describe('AdminImportToolComponent', () => {
  let component: AdminImportToolComponent;
  let fixture: ComponentFixture<AdminImportToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImportToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminImportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
