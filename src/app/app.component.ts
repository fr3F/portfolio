import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { EducationComponent } from './components/education/education.component';
import { SoftwareSkillsComponent } from './components/software-skills/software-skills.component';
import { LanguageComponent } from './components/language/language.component';
import { CommonModule } from '@angular/common';
import { ScrolledTitreComponent } from './components/scrolled_titre/scrolled_titre.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    ExperienceComponent,
    ProfilComponent,
    ContactComponent,
    HobbiesComponent,
    EducationComponent,
    SoftwareSkillsComponent,
    LanguageComponent,
    ScrolledTitreComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true

})
export class AppComponent {
}


