import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageUserSettingsComponent} from './page-user-settings.component';
import {AccountModule} from "../../account.module";
import {TranslateModule} from "@ngx-translate/core";

describe('PageUserSettingsComponent', () => {
  let component: PageUserSettingsComponent;
  let fixture: ComponentFixture<PageUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            AccountModule,
            TranslateModule.forRoot(),
            PageUserSettingsComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
