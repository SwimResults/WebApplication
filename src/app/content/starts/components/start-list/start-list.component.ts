import {Component, Input} from '@angular/core';
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {StartListTileComponent} from '../start-list-tile/start-list-tile.component';
import {Start, StartListTileConfig, FetchingModel, AthleteRelation} from '@swimresults/angular';

@Component({
    selector: 'sr-start-list',
    templateUrl: './start-list.component.html',
    styleUrls: ['./start-list.component.scss'],
    imports: [SpinnerComponent, StartListTileComponent]
})
export class StartListComponent {
    @Input() starts!: Start[] | undefined;
    @Input() config!: StartListTileConfig;
    @Input() athletes: AthleteRelation[] = [];

    @Input() fetching: FetchingModel = {fetching: false};
}
