import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FeatureComponent,  // Ici, on n'ajoute pas le composant dans les déclarations
            },
        ]),
    ],
})
export class FeatureModule { }
