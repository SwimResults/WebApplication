import {AfterViewChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sr-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, AfterViewChecked {
  @Output() querySearch: EventEmitter<string> = new EventEmitter<string>(true);

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.searchForm = this.fb.group({
      query: [""]
    })
  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          console.log(params['query'])
          if (params && params['query'] != undefined) {
            this.searchForm.setValue({"query": params['query']})
            this.searchForm.value.query = params['query'];
          }
          this.submit()
        }
      );
  }

  submit() {
    if (this.searchForm.value.query)
      window.history.pushState(undefined, "", window.location.pathname + "?query=" + this.searchForm.value.query);
    else
      window.history.pushState(undefined, "", window.location.pathname);
    this.querySearch.emit(this.searchForm.value.query);
  }
}
