import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveBarComponent} from './live-bar.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('LiveBarComponent', () => {
  let component: LiveBarComponent;
  let fixture: ComponentFixture<LiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(),
        MatIconModule, LiveBarComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(LiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
