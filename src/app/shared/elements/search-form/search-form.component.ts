import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {WindowRef} from "../../../core/service/window-ref.service";

@Component({
    selector: 'sr-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
    imports: [ReactiveFormsModule, MatIcon, TranslateModule]
})
export class SearchFormComponent implements OnInit {
    @Output() querySearch: EventEmitter<string> = new EventEmitter<string>(true);

    searchForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private windowRef: WindowRef
    ) {
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
        const win = this.windowRef.nativeWindow;

        if (win) {
            if (this.searchForm.value.query) {
                win.history.pushState(undefined, "", win.location.pathname + "?query=" + this.searchForm.value.query);
            } else if (!init) {
                win.history.pushState(undefined, "", win.location.pathname);
            }
        }
        this.querySearch.emit(this.searchForm.value.query);
    }
}
