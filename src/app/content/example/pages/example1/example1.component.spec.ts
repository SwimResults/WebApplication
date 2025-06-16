import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Example1Component} from './example1.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('Example1Component', () => {
  let component: Example1Component;
  let fixture: ComponentFixture<Example1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        MatIconModule,
        TranslateModule.forRoot(), Example1Component],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(Example1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
