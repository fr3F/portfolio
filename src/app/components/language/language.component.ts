import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  titre = "Languages";

  languages = [
    {
      titre: 'Madagascar',
      icone: 'assets/images/madagascar.png',
      viewBox: '0 0 20 20',
      pourcentage: 90,
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      titre: 'France',
      icone: 'assets/images/france.png',
      viewBox: '0 0 20 20',
      pourcentage: 70,
      duration: 1500,
      delay: 20,
      event: "fade-right"
    },
    {
      titre: 'English',
      icone: 'assets/images/royaume-uni.png',
      viewBox: '0 0 20 20',
      pourcentage: 50,
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
  ];
}
