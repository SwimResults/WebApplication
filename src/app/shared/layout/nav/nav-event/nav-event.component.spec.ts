import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavEventComponent} from './nav-event.component';
import {ElementsModule} from "../../../elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('NavEventComponent', () => {
  let component: NavEventComponent;
  let fixture: ComponentFixture<NavEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        RouterTestingModule,
        TranslateModule.forRoot(), NavEventComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(NavEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
