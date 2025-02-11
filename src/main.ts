import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),  // ✅ Assure de conserver les autres providers existants
    importProvidersFrom(BrowserAnimationsModule)  // ✅ Ajout de BrowserAnimationsModule
  ]
}).catch((err) => console.error(err));
