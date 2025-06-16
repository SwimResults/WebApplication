import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeatToolComponent } from './admin-heat-tool.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdminHeatToolComponent', () => {
  let component: AdminHeatToolComponent;
  let fixture: ComponentFixture<AdminHeatToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        MatIconModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule, AdminHeatToolComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeatToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
