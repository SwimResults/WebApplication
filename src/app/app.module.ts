import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ContentModule} from "./content/content.module";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "./shared/layout/layout.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {JwtInterceptor} from "./core/interceptor/jwt.interceptor";
import {MatSelectModule} from "@angular/material/select";
import { ServiceWorkerModule } from '@angular/service-worker';
import {OAuthModule, OAuthStorage} from "angular-oauth2-oidc";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function storageFactory(): OAuthStorage {
    return localStorage;
}

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ContentModule,
        CoreModule,
        AppRoutingModule,
        LayoutModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          defaultLanguage: 'en'
        }),
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [],
                sendAccessToken: true,
            }
        }),
        MatSelectModule,
        ServiceWorkerModule.register('/assets/service-worker-v1.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
  exports: [
    AppComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: OAuthStorage, useFactory: storageFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
