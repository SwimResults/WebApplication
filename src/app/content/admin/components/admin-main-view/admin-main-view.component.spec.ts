import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminMainViewComponent} from './admin-main-view.component';
import {AdminModule} from "../../admin.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('AdminMainViewComponent', () => {
  let component: AdminMainViewComponent;
  let fixture: ComponentFixture<AdminMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        AdminModule,
        RouterTestingModule,
            TranslateModule.forRoot(),
            AdminMainViewComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
