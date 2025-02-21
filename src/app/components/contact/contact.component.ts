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
      lieu: 'Malaza Ampitatafika',
      duration: 1200,
      delay: 20,
    },
    {
      icone: 'phone',
      contact: '+261 34 57 835 84',
      duration: 1500,
      delay: 20,
    },
    {
      icone: 'email',
      email: 'frazakarivony.dev@gmail.com',
      duration: 1600,
      delay: 20,
    },
    {
      icone: 'linkedin',
      linkedin: 'bit.ly/frazakarivony_linkedin',
      duration: 1500,
      delay: 20,
    }
  ];
}
