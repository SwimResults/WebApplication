import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetMapMediumComponent} from './widget-map-medium.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetMapMediumComponent', () => {
  let component: WidgetMapMediumComponent;
  let fixture: ComponentFixture<WidgetMapMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule, WidgetMapMediumComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMapMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
