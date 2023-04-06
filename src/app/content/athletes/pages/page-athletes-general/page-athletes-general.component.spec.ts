import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAthletesGeneralComponent } from './page-athletes-general.component';

describe('PageAthletesGeneralComponent', () => {
  let component: PageAthletesGeneralComponent;
  let fixture: ComponentFixture<PageAthletesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAthletesGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAthletesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
