import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetInfoTextComponent} from './widget-info-text.component';

describe('WidgetInfoTextComponent', () => {
  let component: WidgetInfoTextComponent;
  let fixture: ComponentFixture<WidgetInfoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetInfoTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetInfoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
