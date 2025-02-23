import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  titre = "EDUCATION";
  ngAfterViewInit(): void {
    AOS.init({ disable: false });
  }

  ngAfterViewChecked(): void {
    AOS.refreshHard(); // Réinitialise AOS si du contenu est modifié dynamiquement
  }
  eductions = [
    {
      ecole: "Institut supérieur d’informatique(IS-INFO) ",
      filiere: [
        "Génie Logiciel",
        "Maching Learning",
        "Base de maintenance",
        "Base de CCNA"
      ],
      data: " sept 2024 - ce jour",
      titre: "2ére année en Master professionnel",
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      ecole: "Institut supérieur d’informatique(IS-INFO) ",
      filiere: [
        "Informatique de Gestion",
        "Base de maintenance  Hardware",
      ],
      data: " dec 2022 - sept 2023",
      titre: "Licence en informatique de Gestion",
      duration: 1200,
      delay: 20,
      event: "fade-right"


    },
  ];

}
