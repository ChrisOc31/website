import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    ServicesComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-nav></app-nav>
    <main>
      <app-hero></app-hero>
      <app-services></app-services>
      <!-- <app-work></app-work> -->
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
