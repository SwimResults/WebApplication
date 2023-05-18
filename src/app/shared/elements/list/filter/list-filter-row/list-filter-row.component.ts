import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'sr-list-filter-row',
  templateUrl: './list-filter-row.component.html',
  styleUrls: ['./list-filter-row.component.scss']
})
export class ListFilterRowComponent {
  @Output() querySearch: EventEmitter<string> = new EventEmitter<string>();

  search(event: string) {
    this.querySearch.emit(event);
  }
}
