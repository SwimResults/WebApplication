import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavLinkComponent} from './nav-link.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('NavLinkComponent', () => {
  let component: NavLinkComponent;
  let fixture: ComponentFixture<NavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        MatIconModule,
        RouterTestingModule,
            TranslateModule.forRoot(),
            NavLinkComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
