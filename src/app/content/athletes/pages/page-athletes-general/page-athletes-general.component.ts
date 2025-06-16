import {Component} from '@angular/core';
import {AthleteListViewComponent} from '../../components/athlete-list-view/athlete-list-view.component';

@Component({
    selector: 'sr-page-athletes-general',
    templateUrl: './page-athletes-general.component.html',
    styleUrls: ['./page-athletes-general.component.scss'],
    imports: [AthleteListViewComponent]
})
export class PageAthletesGeneralComponent{

}
