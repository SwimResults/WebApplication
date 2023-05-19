import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { IconPanelComponent } from './icon-panel/icon-panel.component';
import {MatIconModule} from "@angular/material/icon";
import { NavGroupComponent } from './nav/nav-group/nav-group.component';
import { NavLinkComponent } from './nav/nav-link/nav-link.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { PageTitleComponent } from './page-title/page-title.component';
import {TranslateModule} from "@ngx-translate/core";
import { ListFilterRowComponent } from './list/filter/list-filter-row/list-filter-row.component';
import { ListViewComponent } from './list/list-view/list-view.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListTileComponent } from './list/list-tile/list-tile.component';
import { BadgeComponent } from './badge/badge.component';



@NgModule({
    declarations: [
        PanelComponent,
        IconPanelComponent,
        NavGroupComponent,
        NavLinkComponent,
        PageTitleComponent,
        ListFilterRowComponent,
        ListViewComponent,
        SearchFormComponent,
        ListTileComponent,
        BadgeComponent
    ],
    exports: [
        PanelComponent,
        IconPanelComponent,
        NavGroupComponent,
        NavLinkComponent,
        PageTitleComponent,
        ListViewComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterLinkActive,
        RouterLink,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class ElementsModule { }
