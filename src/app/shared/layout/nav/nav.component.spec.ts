import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavComponent} from './nav.component';
import {MatIconModule} from "@angular/material/icon";
import {ElementsModule} from "../../elements/elements.module";
import {LayoutModule} from "../layout.module";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatIconModule,
        ElementsModule,
        LayoutModule,
        RouterTestingModule,
        TranslateModule.forRoot(), NavComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
