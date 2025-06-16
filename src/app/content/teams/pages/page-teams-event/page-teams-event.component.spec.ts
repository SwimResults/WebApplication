import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamsEventComponent } from './page-teams-event.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {TeamsModule} from "../../teams.module";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PageTeamsEventComponent', () => {
  let component: PageTeamsEventComponent;
  let fixture: ComponentFixture<PageTeamsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        RouterTestingModule,
        TeamsModule,
        TranslateModule.forRoot(), PageTeamsEventComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
