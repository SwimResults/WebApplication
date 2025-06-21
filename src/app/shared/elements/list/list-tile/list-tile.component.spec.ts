import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListTileComponent} from './list-tile.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {OAuthModule} from "angular-oauth2-oidc";

describe('ListTileComponent', () => {
  let component: ListTileComponent;
  let fixture: ComponentFixture<ListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            ListTileComponent,
            OAuthModule.forRoot()
        ],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
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
