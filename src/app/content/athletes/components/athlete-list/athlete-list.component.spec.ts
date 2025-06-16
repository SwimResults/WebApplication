import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AthleteListComponent} from './athlete-list.component';

describe('AthleteListComponent', () => {
  let component: AthleteListComponent;
  let fixture: ComponentFixture<AthleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [AthleteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
