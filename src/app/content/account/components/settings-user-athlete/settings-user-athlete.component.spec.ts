import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUserAthleteComponent } from './settings-user-athlete.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SettingsUserAthleteComponent', () => {
  let component: SettingsUserAthleteComponent;
  let fixture: ComponentFixture<SettingsUserAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SettingsUserAthleteComponent],
    imports: [TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
