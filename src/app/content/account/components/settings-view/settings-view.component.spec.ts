import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsViewComponent } from './settings-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {AccountModule} from "../../account.module";

describe('SettingsViewComponent', () => {
  let component: SettingsViewComponent;
  let fixture: ComponentFixture<SettingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsViewComponent ],
        imports: [
            HttpClientTestingModule,
            TranslateModule.forRoot(),
            AccountModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
