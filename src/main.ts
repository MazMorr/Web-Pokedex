import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Configuración completa con routing y zoneless
const zonelessConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes), // ← Router aquí mismo
    provideZonelessChangeDetection(), // ← Zoneless aquí
  ],
};

bootstrapApplication(App, zonelessConfig).catch((err) => console.error(err));
