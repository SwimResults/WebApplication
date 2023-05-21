import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {PagingRequest} from "../../../../core/model/common/paging-request.model";

@Component({
  selector: 'sr-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() data!: IListTile[];
  @Output() refreshData: EventEmitter<RefreshListRequest> = new EventEmitter<RefreshListRequest>();

  limit: number = 10;
  searchQuery: string = "";
  lastOffset: number = -1;

  ngOnInit() {
    window.scroll(0,0);
    this.refresh();
  }

  fetchData(fetch: boolean) {
    if (fetch) {
      this.refresh();
    }
  }

  refresh() {
    if (this.data && this.data.length && this.lastOffset == this.data.length) return;
    this.lastOffset = this.data?.length;
    this.refreshData.emit({
        paging: new PagingRequest(this.limit, this.data?.length, this.searchQuery.toLowerCase())
      }
    )
  }

  onSearch(event: string) {
    this.searchQuery = event;
    this.data = [];
    this.lastOffset = -1
    this.refresh();
    // this.refreshData.emit({
    //   paging: new PagingRequest(this.limit, 0, event.toLowerCase())
    //   }
    // )
  }
}
