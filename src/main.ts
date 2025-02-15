import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';

// Bootstrapping de l'application avec routing et lazy loading
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
