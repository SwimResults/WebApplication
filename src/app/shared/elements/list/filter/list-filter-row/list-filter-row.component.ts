import {Component, EventEmitter, Output} from '@angular/core';
import {ListFilterRequest} from "../../../../../core/model/list/list-filter-request.model";
import {SearchFormComponent} from '../../../search-form/search-form.component';

@Component({
    selector: 'sr-list-filter-row',
    templateUrl: './list-filter-row.component.html',
    styleUrls: ['./list-filter-row.component.scss'],
    imports: [SearchFormComponent]
})
export class ListFilterRowComponent {
  @Output() querySearch: EventEmitter<ListFilterRequest> = new EventEmitter<ListFilterRequest>();

  search(event: string) {
    this.querySearch.emit({query: event});
  }
}
