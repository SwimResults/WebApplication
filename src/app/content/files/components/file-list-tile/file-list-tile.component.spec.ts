import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileListTileComponent} from './file-list-tile.component';
import {TranslateModule} from "@ngx-translate/core";

describe('FileListTileComponent', () => {
    let component: FileListTileComponent;
    let fixture: ComponentFixture<FileListTileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                FileListTileComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FileListTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
