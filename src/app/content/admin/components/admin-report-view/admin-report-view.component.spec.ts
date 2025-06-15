import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportViewComponent } from './admin-report-view.component';

describe('AdminReportViewComponent', () => {
  let component: AdminReportViewComponent;
  let fixture: ComponentFixture<AdminReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
