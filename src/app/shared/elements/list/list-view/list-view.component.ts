import {Component, Input} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";

@Component({
  selector: 'sr-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @Input() data!: IListTile[];

  onSearch(event: string) {
    this.data = this.data.filter(value => {
      return value.name.toLowerCase().indexOf(event.toLowerCase()) > -1;
    });
  }
}
