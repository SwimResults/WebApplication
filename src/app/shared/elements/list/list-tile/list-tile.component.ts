import {Component, EventEmitter, Input, Output, ViewChild, inject} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {countryFlags} from "../../../../core/constant/countryflags.constant";
import {ListConfig} from "../../../../core/model/list/list-config.model";
import {UserService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {IconPanelComponent} from '../../icon-panel/icon-panel.component';
import {RouterLink} from '@angular/router';
import {BadgeComponent} from '../../badge/badge.component';
import {MatIcon} from '@angular/material/icon';
import {SpinnerComponent} from '../../spinner/spinner.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserDataService} from "../../../../core/service/user-data.service";

@Component({
    selector: 'sr-list-tile',
    templateUrl: './list-tile.component.html',
    styleUrls: ['./list-tile.component.scss'],
    imports: [IconPanelComponent, RouterLink, BadgeComponent, MatMenuTrigger, MatIcon, SpinnerComponent, MatMenu, TranslateModule]
})
export class ListTileComponent {
    private userService = inject(UserService);
    private userDataService = inject(UserDataService);

    @Input() entry!: IListTile;
    @Input() config!: ListConfig;
    @Output() refreshRequired: EventEmitter<any> = new EventEmitter<any>();
    flags: Map<string, string> = countryFlags;

    fetchingSetUserAthlete: FetchingModel = {fetching: false} as FetchingModel;

    // we create an object that contains coordinates
    menuTopLeftPosition = {x: 0, y: 0}

    // reference to the MatMenuTrigger in the DOM
    @ViewChild("contextMenuTrigger") contextMenuTrigger: MatMenuTrigger = {} as MatMenuTrigger;

    onRightClick(event: MouseEvent) {
        event.preventDefault();

        this.menuTopLeftPosition.x = event.clientX;
        this.menuTopLeftPosition.y = event.clientY;

        this.contextMenuTrigger.openMenu();
    }

    onSetUserAthlete() {
        this.fetchingSetUserAthlete.fetching = true;
        this.userService.setUserAthlete(this.entry.id, true).subscribe({
            next: (_ => {
                this.fetchingSetUserAthlete.fetching = false;
                this.userDataService.refreshUserData();
                this.refreshRequired.emit();
            }),
            error: (_ => this.fetchingSetUserAthlete.fetching = false)
        });
    }

    onUnsetUserAthlete() {
        this.userService.setUserAthlete(this.entry.id, false).subscribe({
            next: (_ => {
                this.fetchingSetUserAthlete.fetching = false;
                this.userDataService.refreshUserData();
                this.refreshRequired.emit();
            }),
            error: (_ => this.fetchingSetUserAthlete.fetching = false)
        });
    }
}
