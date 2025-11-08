import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';

export interface Experience {
  id: number;
  titre: string;
  date: string;
  details: string;
  technologies: string[];
  img: string;
  lienGitHub: string;
  lienProd: string;
  resultatAttendu?: string[];
  event?: string;
  methode?: string[];
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
  @ViewChild('experienceDetails') experienceDetails!: ElementRef;

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
      date: "Juin 2025 - Oct 2025",
      titre: "Conception et développement d'une application web pour le traitement d'audio en solfège dénommée SOLFY basée sur l'intelligence artificielle",
      img: "assets/images/solfy.png",
      details: "Développement d'une application innovante capable de convertir automatiquement un fichier audio (voix ou instrument) en partition de solfège lisible. Le projet exploite des modèles d'intelligence artificielle pour la détection des notes, la séparation des pistes (stems) et la génération d'une notation musicale en MusicXML.",
      technologies: ["Angular 18", "Python (Spleeter, Librosa, NumPy, Music21)", "Flask", "MySQL"],
      resultatAttendu: [
        "Prototype fonctionnel de l'application accessible via navigateur",
        "Reconnaissance précise des notes et des rythmes à partir d'un fichier audio",
        "Visualisation automatique des partitions en format MusicXML",
        "Interface intuitive et responsive"
      ],
      event: "fade-up",
      methode: ["Méthode Agile Scrum", "Architecture client-serveur REST", "Approche basée sur le machine learning pour l'analyse audio"],
      lienGitHub: "https://github.com/fr3F/.sofly",
      lienProd: "" // ou vide si pas encore déployé
    },

    {
      id: 2,
      date: "jan 2025 - Mars 2025",
      titre: "Développeur Front End chez TechZara",
      img: "assets/images/stock.png",
      details: "",
      technologies: ["Angular", "Tailwindcss", "TypeScript"],
      resultatAttendu: [
        "pour être informé de tout ce qui se passe dans le HIU (encore en cours de développement)"
      ],
      event: "fade-up",
      methode: ["Agile", "Scrum"],
      lienGitHub: "",
      lienProd: "https://techzara.vercel.app/Accueil"
    },
    {
      id: 3,
      date: "Avr 2024 - Sept 2024",
      titre: "Développement d'une application Web de gestion de stock multi-dépôt chez SODIM",
      img: "assets/images/Dépot.png",
      details: "Développement d'une application Web permettant la gestion des stocks répartis sur plusieurs dépôts. L'application offre une interface intuitive pour suivre les entrées, sorties et transferts de marchandises en temps réel.Intégration d'un tableau de bord interactif, gestion des rôles utilisateurs et sécurisation des accès via JWT. Optimisation des performances pour une meilleure réactivité des pages et une expérience utilisateur améliorée.",
      resultatAttendu: [
        "Amélioration de l'interface utilisateur avec une meilleure ergonomie.",
        "Optimisation des performances pour un chargement plus rapide des pages.",
        "Mise en place d'un tableau de bord interactif pour un suivi en temps réel.",
        "Sécurisation des accès avec un système d'authentification robuste (JWT).",
        "Facilitation de la gestion multi-dépôt avec une interface claire et intuitive."
      ],
      technologies: ["Angular", "Node.js", "MySQL", "Sequelize", "Express", "JWT"],
      lienGitHub: "https://bit.ly/Gestion-stock-multi-Depot",
      lienProd: "",
      duration: 1500,
      delay: 20,
      methode: [
        "POO",
        "Principe SOLID",
        "Autonomie avec collaboration ponctuelle "
      ],
      event: "fade-up"
    },

    {
      id: 4,
      date: "Sept 2024",
      titre: "Production d'un Portfolio en année 2024",
      img: "assets/images/portfolio.png",
      details: "Développement d'un portfolio interactif et moderne mettant en avant les compétences, projets et expériences professionnelles. Le site propose une navigation fluide, un design responsive et une section dédiée aux candidatures avec un formulaire de contact dynamique. Intégration d'un backend permettant la gestion des messages et la mise à jour du contenu de manière automatisée.",
      resultatAttendu: [
        "Création d'une plateforme personnalisée pour présenter les projets et compétences.",
        "Optimisation de la performance et du référencement pour une meilleure visibilité.",
        "Mise en place d'un design moderne et responsive adapté à tous les appareils.",
        "Intégration d'un système de gestion des candidatures et des messages reçus."
      ],
      technologies: ["Angular"],
      lienGitHub: "https://razakarivony.vercel.app/",
      lienProd: "",
      duration: 1500,
      methode: [
        "Travail individuel"
      ],
      delay: 20,
      event: "fade-up"
    },
    {
      id: 5,
      date: "Oct 2024",
      titre: "Innovation d'une application Mobile Torche",
      img: "assets/images/torche.png",
      details: "Développement d'une application mobile innovante permettant d'utiliser la lampe torche du smartphone avec des fonctionnalités avancées. L'application inclut différents modes d'éclairage (clignotant, SOS, intensité variable) et une interface ergonomique facilitant son utilisation. Une gestion optimisée de la batterie et de l'accès aux capteurs du téléphone a été intégrée pour améliorer la performance.",
      resultatAttendu: [
        "Développement d'une application mobile légère et performante.",
        "Ajout de fonctionnalités avancées comme le mode SOS et clignotant.",
        "Optimisation de la consommation énergétique pour prolonger l'autonomie du téléphone.",
        "Interface intuitive et ergonomique pour une meilleure expérience utilisateur."
      ],
      technologies: ["Java Android"],
      lienGitHub: "https://bit.ly/3QxH6Ai",
      lienProd: "",
      duration: 1500,
      methode: [
        "Travail individuel"
      ],
      delay: 20,
      event: "fade-up"
    },
    {
      id: 6,
      date: "Avr 2023 - Sept 2023",
      titre: "Conception d'un site Web chez Value-IT",
      img: "assets/images/image-admin-Valu.png",
      details: "Développement d'un portail de recrutement en ligne permettant aux candidats internes et externes de postuler à des offres d'emploi. L'application comprend un espace administrateur pour la gestion des candidatures, un système de filtrage avancé et une interface intuitive facilitant la navigation. Intégration de fonctionnalités de suivi des candidatures et amélioration de la sécurité des données pour garantir la confidentialité des informations.",
      resultatAttendu: [
        "Réduction des délais de traitement des candidatures grâce à un système automatisé.",
        "Amélioration de la sécurité des données et protection des informations sensibles.",
        "Réduction des coûts liés à la gestion des recrutements en optimisant les processus.",
        "Amélioration de l'expérience utilisateur avec une interface ergonomique et fluide.",
        "Facilitation de la recherche des candidatures grâce à un moteur de filtrage efficace."
      ],
      technologies: ["JavaEE", "MySQL", "HTML", "CSS"],
      lienGitHub: "https://bit.ly/Creation-of-the-Value-IT-Website",
      lienProd: "",
      duration: 1500,
      methode: [
        "Agile",
        "Travail collaboration ponctuelle."
      ],
      delay: 20,
      event: "fade-up"
    },

  ];

  visibleExperienceCount: number = 2;

  showMore(): void {
    if (this.visibleExperienceCount < this.experience.length) {
      this.visibleExperienceCount += this.experience.length;
    }
  }
  selectExperience(exp: Experience): void {
    this.selectedExperience = exp;
    this.activeExperience = exp;
    this.isSelect = true;
    this.isImage = false;

    // Scroll automatique vers les détails en mode responsive
    if (this.experienceDetails && window.innerWidth < 1024) {
      this.experienceDetails.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }


  onMouseEnter(exp: Experience): void {
    this.selectedExperience = exp;
    this.isSelect = true;
    this.isImage = false;
  }

  onMouseLeave(): void {
    this.isSelect = false;
    // this.isImage = false;
  }

  hoverExperience(exp: Experience): void {
    this.activeExperience = exp;
  }
}
