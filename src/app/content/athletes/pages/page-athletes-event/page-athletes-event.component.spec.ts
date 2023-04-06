import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAthletesEventComponent } from './page-athletes-event.component';

describe('PageAthletesEventComponent', () => {
  let component: PageAthletesEventComponent;
  let fixture: ComponentFixture<PageAthletesEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAthletesEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAthletesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
