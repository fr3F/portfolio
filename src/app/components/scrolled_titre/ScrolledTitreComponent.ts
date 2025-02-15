import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
    selector: 'app-scrolled-titre',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scrolled_titre.component.html',
    styleUrls: ['./scrolled_titre.component.css']
})
export class ScrolledTitreComponent {

    titre = 'RAZAKARIVONY Finoana Feno Fitiavana';
    donnee = "25 ans | Malaza Ampitatafika | Antananarivo | 102";
    titreExperience = "EXPÉRIENCE ET RÉALISATIONS";
}
