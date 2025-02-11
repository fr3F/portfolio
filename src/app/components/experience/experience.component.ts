import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';  // Importez AOS

@Component({
  selector: 'app-experience',
  standalone: true, // Marque ce composant comme standalone
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit, AfterViewChecked {
  isSelect = false; // Variable pour contrôler si une expérience est sélectionnée
  isImage = false;
  activeExperience: any = null;
  selectedExperience: any;

  ngOnInit(): void {
    // Initialisation d'AOS avec options
    AOS.init({ disable: false });

    this.isImage = true;
    this.isSelect = false; // Initialise la sélection à false lors du chargement du composant
  }

  ngAfterViewChecked(): void {
    AOS.refresh(); // Réinitialise AOS si du contenu est modifié dynamiquement
  }

  // Données d'expérience avec détails, résultat attendu, technologies, et image
  titre = "EXPÉRIENCE ET RÉALISATIONS";
  experience = [
    {
      data: "Mar 2023 - Juin 2023",
      titre: "Mise en place d'application Web chez SODIM",
      img: 'assets/images/Dépot.png', // Image associée à l'expérience
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum ullam facere excepturi earum consequuntur? In, placeat facere pariatur, deserunt vitae debitis corporis doloremque aliquam saepe illum non voluptates enim?',
      resultatAttendu: 'Amélioration de l\'interface utilisateur et de la performance des pages.',
      technologies: ['Angular', 'Node.js', 'MySQL'],
      lien: 'https://github.com/FitiavanaRazakarivony/Gestion-stock-multi-Depot',
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      data: "Avr 2023 - Sept 2023",
      titre: "Conception d'un site Web chez Value-IT",
      img: 'assets/images/image-admin-Valu.png', // Image associée à l'expérience
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum ullam facere excepturi earum consequuntur? In, placeat facere pariatur, deserunt vitae debitis corporis doloremque aliquam saepe illum non voluptates enim?',
      resultatAttendu: 'Optimisation des processus de recrutement.',
      technologies: ['Java', 'HTML', 'CSS'],
      lien: 'https://github.com/FitiavanaRazakarivony/Creation-of-the-Value-IT-Website-',
      duration: 1500,
      delay: 20,
      event: "fade-right"
    },
    {
      data: "Sept 2024",
      titre: "Production d'un Porfolio",
      img: 'assets/images/portfolio.png', // Image associée à l'expérience
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum ullam facere excepturi earum consequuntur? In, placeat facere pariatur, deserunt vitae debitis corporis doloremque aliquam saepe illum non voluptates enim?',
      resultatAttendu: 'Création d\'une plateforme de gestion des candidatures.',
      technologies: ['JavaScript', 'MySQL', 'Node.js'],
      lien: 'https://frazakarivony.vercel.app/',
      duration: 1500,
      delay: 20,
      event: "fade-left"
    },
    {
      data: "Oct 2024",
      titre: " Innovation d'un applicatin Mobile Torche",
      img: 'assets/images/torche.png', // Image associée à l'expérience
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum ullam facere excepturi earum consequuntur? In, placeat facere pariatur, deserunt vitae debitis corporis doloremque aliquam saepe illum non voluptates enim?',
      resultatAttendu: 'Création d\'une plateforme de gestion des candidatures.',
      technologies: ['JavaScript', 'MySQL', 'Node.js'],
      lien: 'https://github.com/FitiavanaRazakarivony/Torche_APK_Android',
      duration: 1500,
      delay: 20,
      event: "fade-right"
    },
  ];

  selectExperience(exp: any) {
    this.selectedExperience = exp;
    this.isSelect = true;
    this.isImage = false;
    this.activeExperience = exp;
  }

  onMouseEnter(exp: any) {
    this.selectedExperience = exp;
    this.isSelect = true;
    this.isImage = false;
  }

  onMouseLeave() {
    this.isSelect = false;
    this.isImage = false;
  }

  hoverExperience(exp: any) {
    this.activeExperience = exp;
  }
}
