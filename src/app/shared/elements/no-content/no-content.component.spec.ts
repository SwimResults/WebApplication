import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoContentComponent} from './no-content.component';
import {TranslateModule} from "@ngx-translate/core";

describe('NoContentComponent', () => {
  let component: NoContentComponent;
  let fixture: ComponentFixture<NoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            NoContentComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
