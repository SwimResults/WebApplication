import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSubmissionDialogComponent } from './report-submission-dialog.component';

describe('ReportSubmissionDialogComponent', () => {
  let component: ReportSubmissionDialogComponent;
  let fixture: ComponentFixture<ReportSubmissionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSubmissionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportSubmissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
