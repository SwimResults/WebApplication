import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import { IsVisibleDirective } from './directive/is-visible.directive';
import {OAuthModule} from "angular-oauth2-oidc";



@NgModule({
  declarations: [
    IsVisibleDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [],
        sendAccessToken: true
      }
    })
  ],
    exports: [
        TranslateModule,
        IsVisibleDirective
    ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
