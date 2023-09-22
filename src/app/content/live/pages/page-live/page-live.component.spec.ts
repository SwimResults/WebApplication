import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLiveComponent } from './page-live.component';
import {LiveModule} from "../../live.module";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('PageLiveComponent', () => {
  let component: PageLiveComponent;
  let fixture: ComponentFixture<PageLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLiveComponent ],
      imports: [
        LiveModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
