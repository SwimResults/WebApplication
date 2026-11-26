// Test entry point (angular.json "test" > "main"): the builder's default setup, plus the providers every
// spec needs because app.config.ts provides them in the real app.
import {getTestBed, TestBed} from '@angular/core/testing';
import {BrowserTestingModule, platformBrowserTesting} from '@angular/platform-browser/testing';
import {provideSwimResultsApi} from '@swimresults/angular';
import {environment} from './environments/environment';

getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting(), {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
});

beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideSwimResultsApi({apiUrls: environment.api_urls})]});
});
