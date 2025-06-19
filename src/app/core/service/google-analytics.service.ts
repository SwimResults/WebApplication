import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
    private isLoaded = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    init(): void {
        if (!isPlatformBrowser(this.platformId) || this.isLoaded) {
            return;
        }

        // Add gtag script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P6KQ10DSCL';
        script.async = true;
        document.head.appendChild(script);

        // Add config
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
        }

        gtag('js', new Date());
        gtag('config', 'G-P6KQ10DSCL');

        this.isLoaded = true;
    }
}
