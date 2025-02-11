import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  titre = 'hobbies'
  hobbies = [
    {
      icone: 'bike-svgrepo-com',
      titre: 'Biking',
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      icone: 'football-2-svgrepo-com',
      titre: 'Football',
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      icone: 'basketball-svgrepo-com',
      titre: 'Basketball',
      duration: 1500,
      delay: 20,
      event: "fade-left"
    }
  ]
}
