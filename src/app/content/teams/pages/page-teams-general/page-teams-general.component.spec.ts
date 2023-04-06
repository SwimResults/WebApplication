import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamsGeneralComponent } from './page-teams-general.component';

describe('PageTeamsGeneralComponent', () => {
  let component: PageTeamsGeneralComponent;
  let fixture: ComponentFixture<PageTeamsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamsGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
