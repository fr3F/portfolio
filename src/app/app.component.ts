import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './components/experience/experience.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { EducationComponent } from './components/education/education.component';
import { SoftwareSkillsComponent } from './components/software-skills/software-skills.component';
import { LanguageComponent } from './components/language/language.component';
import { ScrolledTitreComponent } from './components/scrolled_titre/ScrolledTitreComponent';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Correction ici (pluriel)
  imports: [
    CommonModule,  // Ajout du module commun
    RouterModule,
    ExperienceComponent,
    ProfilComponent,
    ContactComponent,
    HobbiesComponent,
    EducationComponent,
    SoftwareSkillsComponent,
    LanguageComponent,
    ScrolledTitreComponent,
    FooterComponent
  ],
})
export class AppComponent {
  // Utilisation de @HostListener pour détecter le scroll
  @HostListener('window:scroll', [])
  onScroll(): void {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.style.width = scrollPercentage + "%";
    }
  }
}
