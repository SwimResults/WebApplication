import { NgModule, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {IsVisibleDirective} from './directive/is-visible.directive';
import {WidgetDirective} from './directive/widget.directive';
import {IsAuthedDirective} from './directive/is-authed.directive';
import {IsAdminDirective} from './directive/is-admin.directive';

@NgModule({
    exports: [
        TranslateModule,
        IsVisibleDirective,
        WidgetDirective,
        IsAuthedDirective,
        IsAdminDirective
    ],
    imports: [
        CommonModule,
        TranslateModule,
        IsVisibleDirective,
        WidgetDirective,
        IsAuthedDirective,
        IsAdminDirective
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class CoreModule {
  constructor(){
    const core = inject(CoreModule, { optional: true, skipSelf: true });

    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
