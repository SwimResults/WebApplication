import { Injectable, inject } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    private snackBar = inject(MatSnackBar);
    private translateService = inject(TranslateService);


    public open(message: string) {
        this.snackBar.open(message);
    }

    public openAndTranslate(key: string) {
        this.translateService.get(key).subscribe({
            next: translation => {
                this.snackBar.open(translation)
            },
            error: _ => {
                this.snackBar.open(key);
            }
        })
    }
}
