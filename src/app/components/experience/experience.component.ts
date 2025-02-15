import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import AOS from 'aos';

export interface Experience {
  id: number;
  titre: string;
  date: string;
  details: string;
  technologies: string[];
  img: string;
  lien: string;
  resultatAttendu?: string;
  event?: string;
  duration?: number;
  delay?: number;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit, AfterViewChecked {
  isSelect = false;
  isImage = false;
  activeExperience: Experience | null = null;
  selectedExperience: Experience | null = null;

  ngOnInit(): void {
    AOS.init({ disable: false });
    this.isImage = true;
    this.isSelect = false;
  }

  ngAfterViewChecked(): void {
    AOS.refresh();
  }

  titre = "EXPÉRIENCE ET RÉALISATIONS";
  experience: Experience[] = [
    {
      id: 1,
      date: "Mar 2023 - Juin 2023",
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
      id: 2,
      date: "Avr 2023 - Sept 2023",
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
      id: 3,
      date: "Sept 2024",
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
      id: 4,
      date: "Oct 2024",
      titre: "Innovation d'une application Mobile Torche",
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

  selectExperience(exp: Experience): void {
    this.selectedExperience = exp;
    this.activeExperience = exp;
    this.isSelect = true;
    this.isImage = false;
  }

  onMouseEnter(exp: Experience): void {
    this.selectedExperience = exp;
    this.isSelect = true;
    this.isImage = false;
  }

  onMouseLeave(): void {
    this.isSelect = false;
    this.isImage = false;
  }

  hoverExperience(exp: Experience): void {
    this.activeExperience = exp;
  }
}
