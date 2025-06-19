import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
    imports: [ReactiveFormsModule, MatIcon, TranslateModule]
})
export class SearchFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  @Output() querySearch: EventEmitter<string> = new EventEmitter<string>(true);

  searchForm: FormGroup;

  constructor() {
    this.searchForm = this.fb.group({
      query: [""]
    })
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          console.log(params['query'])
          if (params && params['query'] != undefined) {
            this.searchForm.setValue({"query": params['query']})
            this.searchForm.value.query = params['query'];
          }
          this.submit(true)
        }
      );
  }

  submit(init: boolean = false) {
    if (this.searchForm.value.query) {
        window.history.pushState(undefined, "", window.location.pathname + "?query=" + this.searchForm.value.query);
    } else if (!init) {
        window.history.pushState(undefined, "", window.location.pathname);
    }
    this.querySearch.emit(this.searchForm.value.query);
  }
}
