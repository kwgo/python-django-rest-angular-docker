import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    //providers: [provideRouter(routes), provideClientHydration(),    provideHttpClient(withFetch())
    provideHttpClient(),

    { provide: API_BASE_URL, useValue: 'https://api.example.com' }
  
  ]
};

