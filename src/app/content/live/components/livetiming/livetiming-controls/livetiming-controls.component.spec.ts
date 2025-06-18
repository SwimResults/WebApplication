import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LivetimingControlsComponent} from './livetiming-controls.component';
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

describe('LivetimingControlsComponent', () => {
    let component: LivetimingControlsComponent;
    let fixture: ComponentFixture<LivetimingControlsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatIconModule,
                TranslateModule.forRoot(),
                LivetimingControlsComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LivetimingControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
