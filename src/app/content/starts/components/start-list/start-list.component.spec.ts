import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StartListComponent} from './start-list.component';

describe('StartListComponent', () => {
  let component: StartListComponent;
  let fixture: ComponentFixture<StartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            StartListComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
