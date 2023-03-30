import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPanelComponent } from './icon-panel.component';
import {MatIconModule} from "@angular/material/icon";

describe('IconPanelComponent', () => {
  let component: IconPanelComponent;
  let fixture: ComponentFixture<IconPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPanelComponent ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
