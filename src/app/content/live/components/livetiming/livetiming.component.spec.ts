import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingComponent } from './livetiming.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {LiveModule} from "../../live.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LivetimingComponent', () => {
  let component: LivetimingComponent;
  let fixture: ComponentFixture<LivetimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [LivetimingComponent],
    imports: [LiveModule,
        RouterTestingModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(LivetimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
