import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUserAthleteComponent } from './settings-user-athlete.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('SettingsUserAthleteComponent', () => {
  let component: SettingsUserAthleteComponent;
  let fixture: ComponentFixture<SettingsUserAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUserAthleteComponent ],
        imports: [
            HttpClientTestingModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsUserAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
