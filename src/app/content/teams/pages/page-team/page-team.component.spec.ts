import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamComponent } from './page-team.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TeamsModule} from "../../teams.module";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PageTeamComponent', () => {
  let component: PageTeamComponent;
  let fixture: ComponentFixture<PageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PageTeamComponent],
    imports: [RouterTestingModule,
        TeamsModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
