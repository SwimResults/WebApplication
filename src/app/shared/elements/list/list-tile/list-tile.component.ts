import {Component, Input} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";

@Component({
  selector: 'sr-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent {
  @Input() entry!: IListTile;
}
