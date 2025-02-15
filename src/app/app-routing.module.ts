import { Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';

// Définition des routes
export const routes: Routes = [
    {
        path: 'feature',
        loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),  // Lazy loading du module
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Route par défaut
    { path: '**', redirectTo: '/home' },  // Redirection pour les routes inconnues
];

