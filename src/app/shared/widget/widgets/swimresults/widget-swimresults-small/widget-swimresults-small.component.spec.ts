import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetSwimresultsSmallComponent} from './widget-swimresults-small.component';

describe('WidgetSwimresultsSmallComponent', () => {
  let component: WidgetSwimresultsSmallComponent;
  let fixture: ComponentFixture<WidgetSwimresultsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetSwimresultsSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSwimresultsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
