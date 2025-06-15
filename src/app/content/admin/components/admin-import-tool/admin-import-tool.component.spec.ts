import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportToolComponent } from './admin-import-tool.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdminImportToolComponent', () => {
  let component: AdminImportToolComponent;
  let fixture: ComponentFixture<AdminImportToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AdminImportToolComponent],
    imports: [ElementsModule,
        MatRadioModule,
        MatIconModule,
        ReactiveFormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AdminImportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
