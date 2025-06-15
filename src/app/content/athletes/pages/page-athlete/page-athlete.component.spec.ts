import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAthleteComponent } from './page-athlete.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {AthletesModule} from "../../athletes.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PageAthleteComponent', () => {
  let component: PageAthleteComponent;
  let fixture: ComponentFixture<PageAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PageAthleteComponent],
    imports: [RouterTestingModule,
        ElementsModule,
        AthletesModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
