// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-personal-pageing';
import { getpersonal-pageBed } from '@angular/core/personal-pageing';
import {
  BrowserDynamicpersonal-pageingModule,
  platformBrowserDynamicpersonal-pageing
} from '@angular/platform-browser-dynamic/personal-pageing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular personal-pageing environment.
getpersonal-pageBed().initpersonal-pageEnvironment(
  BrowserDynamicpersonal-pageingModule,
  platformBrowserDynamicpersonal-pageing()
);
// Then we find all the personal-pages.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
