import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventListComponent } from './admin-event-list.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdminEventListToolComponent', () => {
  let component: AdminEventListComponent;
  let fixture: ComponentFixture<AdminEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AdminEventListComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
