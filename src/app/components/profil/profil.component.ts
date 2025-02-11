import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  profil = {
    imageSrc: 'assets/images/fitiavana.png',
    description: "En tant que développeur, ma motivation repose sur la satisfaction des utilisateurs, le plaisir de résoudre des défis techniques et le désir d'apprendre pour livrer des solutions performantes. Curieux et engagé, je m’investis pleinement dans chaque projet, car développer est bien plus qu’un métier pour moi : c’est une passion."
  };
}
