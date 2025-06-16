import {Component, Input} from '@angular/core';
import {Start} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {StartListTileComponent} from '../start-list-tile/start-list-tile.component';

@Component({
    selector: 'sr-start-list',
    templateUrl: './start-list.component.html',
    styleUrls: ['./start-list.component.scss'],
    imports: [SpinnerComponent, StartListTileComponent]
})
export class StartListComponent {
  @Input() starts!: Start[] | undefined;
  @Input() config!: StartListTileConfig;

  @Input() fetching: FetchingModel = {fetching: false};
}
