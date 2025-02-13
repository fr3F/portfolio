import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-software-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.css'],
})
export class SoftwareSkillsComponent implements AfterViewChecked, AfterViewInit {
  // Titre principal
  titre = 'Compétences logicielles';

  ngAfterViewInit(): void {
    AOS.init({ disable: false });
  }

  ngAfterViewChecked(): void {
    AOS.refreshHard(); // Réinitialise AOS si du contenu est modifié dynamiquement
  }

  languages = [
    {
      icone: 'HTML',
      titre: 'HTML',
      tooltip: 'HTML',
      svgPath: 'assets/icones/soft-skills/html-5-min.png',
      progress: 80,
      duration: 1000,
      delay: 20,
    },
    {
      icone: 'CSS',
      titre: 'CSS',
      tooltip: 'CSS',
      svgPath: 'assets/icones/soft-skills/css-3-min.png',
      progress: 80,
      duration: 1200,
      delay: 20,
    },
    {
      icone: 'JavaScript',
      titre: 'JavaScript',
      tooltip: 'JavaScript',
      svgPath: 'assets/icones/soft-skills/js-min.png',
      progress: 80,
      duration: 1300,
      delay: 20,
    },
    {
      icone: 'Java',
      titre: 'Java',
      tooltip: 'Java',
      svgPath: 'assets/icones/soft-skills/java-min.png',
      progress: 80,
      duration: 1100,
      delay: 20,
    },
    {
      icone: 'Python',
      titre: 'Python',
      tooltip: 'Python',
      svgPath: 'assets/icones/soft-skills/python-min.png',
      progress: 80,
      duration: 1500,
      delay: 20,
    },
    {
      icone: 'NodeJs',
      titre: 'Node.js',
      tooltip: 'Node.js',
      svgPath: 'assets/icones/soft-skills/nodejs-min.png',
      progress: 80,
      duration: 1500,
      delay: 20,
    },
    {
      icone: 'SQL',
      titre: 'SQL',
      tooltip: 'SQL',
      svgPath: 'assets/icones/soft-skills/sql-min.png',
      progress: 80,
      duration: 1300,
      delay: 20,
    },
  ];

  frameworks = [
    {
      icone: 'Angular',
      titre: 'Angular',
      tooltip: 'Framework web pour le développement front-end',
      svgPath: 'assets/icones/soft-skills/programing-min.png',
      progress: 70,
      duration: 500,
      delay: 20,
    },
    {
      icone: 'TailwindCSS',
      titre: 'TailwindCSS',
      tooltip: 'Framework CSS moderne',
      svgPath: 'assets/icones/soft-skills/tailwindcss-min.png',
      progress: 80,
      duration: 800,
      delay: 20,
    },
    {
      icone: 'Flask',
      titre: 'Flask',
      tooltip: 'Micro-framework Python',
      svgPath: 'assets/icones/soft-skills/flask-min.png',
      progress: 80,
      duration: 1000,
      delay: 20,
    },
    {
      icone: 'Spring Boot',
      titre: 'Spring Boot',
      tooltip: 'Micro-framework Java',
      svgPath: 'assets/icones/soft-skills/springBoot-min.png',
      progress: 80,
      duration: 1000,
      delay: 20,
    },
    {
      icone: 'React',
      titre: 'React',
      tooltip: 'Micro-framework JS',
      svgPath: 'assets/icones/soft-skills/react-min.png',
      progress: 80,
      duration: 1000,
      delay: 20,
    },
  ];

  outils = [
    {
      icone: 'AI',
      titre: 'Adobe Illustrator',
      tooltip: 'Design vectoriel professionnel',
      svgPath: 'assets/icones/soft-skills/illustrator-min.png',
      progress: 80,
      duration: 500,
      delay: 20,
    },
    {
      icone: 'PS',
      titre: 'Adobe Photoshop',
      tooltip: 'Édition et retouche d’images',
      svgPath: 'assets/icones/soft-skills/adobe-photoshop-min.png',
      progress: 90,
      duration: 800,
      delay: 20,
    },
    {
      icone: 'Figma',
      titre: 'Figma',
      tooltip: 'Outil de design UI/UX',
      svgPath: 'assets/icones/soft-skills/figma-min.png',
      progress: 60,
      duration: 900,
      delay: 20,
    },
    {
      icone: 'Postman',
      titre: 'Postman',
      tooltip: 'Tester les API REST',
      svgPath: 'assets/icones/soft-skills/Postman-min.png',
      progress: 60,
      duration: 1000,
      delay: 20,
    },
  ];
}
