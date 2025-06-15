import {Component} from '@angular/core';
import {WidgetFavoritesComponent} from "../widget-favorites/widget-favorites.component";

@Component({
    selector: 'sr-widget-favorites-large',
    templateUrl: './../widget-favorites/widget-favorites.component.html',
    styleUrls: ['./widget-favorites-large.component.scss', './../widget-favorites/widget-favorites.component.scss'],
    standalone: false
})
export class WidgetFavoritesLargeComponent extends WidgetFavoritesComponent {

}
