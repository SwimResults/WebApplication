import {importProvidersFrom, isDevMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {OAuthModule, OAuthStorage} from "angular-oauth2-oidc";
import {MatSelectModule} from "@angular/material/select";
import {ServiceWorkerModule} from "@angular/service-worker";
import {JwtInterceptor} from "./core/interceptor/jwt.interceptor";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function storageFactory(): OAuthStorage {
    return localStorage;
}

export const appConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            CoreModule,
            AppRoutingModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                },
                defaultLanguage: 'de'
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
        ),
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: OAuthStorage, useFactory: storageFactory},
        provideAnimations()
    ]
}
