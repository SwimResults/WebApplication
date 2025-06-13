import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(
        private snackBar: MatSnackBar,
        private translateService: TranslateService
    ) {}

    public open(message: string) {
        this.snackBar.open(message);
    }

    public openAndTranslate(key: string) {
        this.translateService.getTranslation(key).subscribe({
            next: translation => {
                this.snackBar.open(translation)
            },
            error: _ => {
                this.snackBar.open(key);
            }
        })
    }
}
