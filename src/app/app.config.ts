import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimations(),
    
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { autoFocus: 'dialog', restoreFocus: true }
    }
  ]
};
