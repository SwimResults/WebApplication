import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBarComponent } from './live-bar.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";

describe('LiveBarComponent', () => {
  let component: LiveBarComponent;
  let fixture: ComponentFixture<LiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveBarComponent ],
        imports: [
            HttpClientTestingModule,
            TranslateModule.forRoot(),
            MatIconModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
