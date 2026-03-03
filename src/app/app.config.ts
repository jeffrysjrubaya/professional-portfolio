import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', // This is the key!
  scrollOffset: [0, 64] // Optional: Offset for your sticky header height
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling(routerOptions))
  ]
};
