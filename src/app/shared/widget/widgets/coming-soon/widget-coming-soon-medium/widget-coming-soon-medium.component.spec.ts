import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetComingSoonMediumComponent} from './widget-coming-soon-medium.component';
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetComingSoonMediumComponent', () => {
  let component: WidgetComingSoonMediumComponent;
  let fixture: ComponentFixture<WidgetComingSoonMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            WidgetComingSoonMediumComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetComingSoonMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
