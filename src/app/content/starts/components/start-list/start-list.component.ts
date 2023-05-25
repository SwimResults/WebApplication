import {Component, Input} from '@angular/core';
import {Start} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";

@Component({
  selector: 'sr-start-list',
  templateUrl: './start-list.component.html',
  styleUrls: ['./start-list.component.scss']
})
export class StartListComponent {
  @Input() starts!: Start[] | undefined;
  @Input() config!: StartListTileConfig;
}
