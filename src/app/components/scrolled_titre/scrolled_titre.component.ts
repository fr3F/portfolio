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
  titreExperience = "EXPÉRIENCE ET RÉALISATIONS";
  isExperience = false;

  ngOnInit(): void {
    this.isExperience = false
  }

}
