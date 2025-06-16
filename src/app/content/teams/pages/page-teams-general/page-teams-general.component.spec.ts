import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageTeamsGeneralComponent} from './page-teams-general.component';
import {TeamsModule} from "../../teams.module";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('PageTeamsGeneralComponent', () => {
  let component: PageTeamsGeneralComponent;
  let fixture: ComponentFixture<PageTeamsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TeamsModule,
        TranslateModule.forRoot(),
        RouterTestingModule, PageTeamsGeneralComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
