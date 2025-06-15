import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {StartsModule} from "../../../starts";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [EventListComponent],
    imports: [RouterTestingModule,
        ElementsModule,
        StartsModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
