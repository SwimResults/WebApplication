import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoutComponent} from './logout.component';
import {TranslateModule} from "@ngx-translate/core";

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            LogoutComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
