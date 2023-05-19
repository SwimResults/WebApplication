import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {PagingRequest} from "../../../../core/model/common/paging-request.model";

@Component({
  selector: 'sr-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @Input() data!: IListTile[];
  @Output() refreshData: EventEmitter<RefreshListRequest> = new EventEmitter<RefreshListRequest>();

  onSearch(event: string) {
    this.refreshData.emit({
      paging: new PagingRequest(undefined, undefined, event.toLowerCase())
      }
    )
  }
}
