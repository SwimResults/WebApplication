import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StartListTileComponent} from './start-list-tile.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('StartListTileComponent', () => {
  let component: StartListTileComponent;
  let fixture: ComponentFixture<StartListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            StartListTileComponent
        ],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(StartListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
