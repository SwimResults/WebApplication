import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {LayoutModule} from "../layout.module";
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SidebarComponent],
    imports: [LayoutModule,
        RouterTestingModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
