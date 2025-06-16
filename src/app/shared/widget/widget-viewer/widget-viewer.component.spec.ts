import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetViewerComponent} from './widget-viewer.component';

describe('WidgetViewerComponent', () => {
  let component: WidgetViewerComponent;
  let fixture: ComponentFixture<WidgetViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
