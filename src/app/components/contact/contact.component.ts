import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  titre = 'contact';
  ngAfterViewInit(): void {
    AOS.init({ disable: false });
  }

  ngAfterViewChecked(): void {
    AOS.refreshHard(); // Réinitialise AOS si du contenu est modifié dynamiquement
  }

  contacts = [
    {
      icone: 'lieu',
      titre: 'Lot CM 25 Malaza Ampitatafika, 102, Antananarivo',
      duration: 1200,
      delay: 20,
    },
    {
      icone: 'phone',
      titre: '+261 34 57 835 84',
      duration: 1500,
      delay: 20,
    },
    {
      icone: 'email',
      titre: 'frazakarivony.dev@gmail.com',
      duration: 1600,
      delay: 20,
    },
    {
      icone: 'linkedin',
      titre: 'Mon profil LinkedIn',
      duration: 1500,
      delay: 20,
    }
  ];
}
