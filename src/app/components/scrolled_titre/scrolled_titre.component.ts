import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

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
  isExperience = false;  // Affichage du deuxième titre

  isScrolled = false;  // Affichage du premier titre
  isScrolled2 = false;
  ngOnInit(): void {
    this.isExperience = false
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 100 && scrollTop < 600;  // Affiche le premier titre entre 150px et 200px
    this.isScrolled2 = scrollTop > 500;  // Affiche le deuxième titre après 200px
  }
}
