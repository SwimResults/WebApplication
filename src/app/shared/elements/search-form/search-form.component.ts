import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'sr-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() querySearch: EventEmitter<string> = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      query: [""]
    })
  }

  submit() {
    this.querySearch.emit(this.searchForm.value.query);
  }
}
