import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingListTileComponent} from './meeting-list-tile.component';
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

describe('MeetingListTileComponent', () => {
    let component: MeetingListTileComponent;
    let fixture: ComponentFixture<MeetingListTileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatIconModule,
                TranslateModule.forRoot(),
                MeetingListTileComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MeetingListTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
