import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminEventComponent } from './page-admin-event.component';
import {AdminModule} from "../../admin.module";

describe('PageAdminEventComponent', () => {
  let component: PageAdminEventComponent;
  let fixture: ComponentFixture<PageAdminEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminEventComponent ],
      imports: [
        AdminModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAdminEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
