import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetComingSoonLargeComponent} from './widget-coming-soon-large.component';

describe('WidgetComingSoonLargeComponent', () => {
  let component: WidgetComingSoonLargeComponent;
  let fixture: ComponentFixture<WidgetComingSoonLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetComingSoonLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetComingSoonLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
