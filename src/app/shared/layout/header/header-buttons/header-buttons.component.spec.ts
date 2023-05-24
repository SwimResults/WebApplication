import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonsComponent } from './header-buttons.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

describe('HeaderButtonsComponent', () => {
  let component: HeaderButtonsComponent;
  let fixture: ComponentFixture<HeaderButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderButtonsComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatButtonModule,
        MatIconModule,
        MatMenuModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
