import { Routes, provideRouter } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';  // Assure-toi d'importer les composants nécessaires

// Définition des routes
export const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),  // Lazy loading du module
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Route par défaut
  { path: '**', redirectTo: '/home' },  // Redirection pour les routes inconnues
];

// Configuration de l'application avec les routes
export const appConfig = {
  imports: [
    provideRouter(routes),  // Fournir les routes via `provideRouter`
  ],
  providers: [],  // Ajouter des providers ici si nécessaire
};
