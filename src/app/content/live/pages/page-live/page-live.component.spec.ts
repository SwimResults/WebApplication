import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLiveComponent } from './page-live.component';

describe('PageLiveComponent', () => {
  let component: PageLiveComponent;
  let fixture: ComponentFixture<PageLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLiveComponent ]
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
