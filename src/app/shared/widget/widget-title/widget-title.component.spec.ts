import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleComponent } from './widget-title.component';
import {MatIconModule} from "@angular/material/icon";

describe('WidgetTitleComponent', () => {
  let component: WidgetTitleComponent;
  let fixture: ComponentFixture<WidgetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTitleComponent ],
        imports: [
            MatIconModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
