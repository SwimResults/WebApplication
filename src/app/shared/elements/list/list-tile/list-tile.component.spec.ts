import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListTileComponent} from './list-tile.component';
import {ElementsModule} from "../../elements.module";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('ListTileComponent', () => {
  let component: ListTileComponent;
  let fixture: ComponentFixture<ListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ElementsModule,
        RouterTestingModule, ListTileComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(ListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
