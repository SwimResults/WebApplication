import {Component} from '@angular/core';
import {WidgetFavoritesComponent} from "../widget-favorites/widget-favorites.component";
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetLoginRequiredComponent} from '../../../widget-login-required/widget-login-required.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-favorites-medium',
    templateUrl: './../widget-favorites/widget-favorites.component.html',
    styleUrls: ['./widget-favorites-medium.component.scss', './../widget-favorites/widget-favorites.component.scss'],
    imports: [WidgetTitleComponent, WidgetLoginRequiredComponent, WidgetInfoTextComponent, RouterLink, TranslateModule]
})
export class WidgetFavoritesMediumComponent extends WidgetFavoritesComponent {

}
