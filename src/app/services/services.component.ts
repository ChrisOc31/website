import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services" id="services">
      <div class="section-header">
        <p class="label">What we do</p>
        <h2>Simple services,<br><em>serious results.</em></h2>
      </div>
      <div class="grid">
        <div class="service-card" *ngFor="let s of services" style="padding-left: 15px">
          <span class="num">{{ s.number }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.description }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 6rem 4rem;
      border-bottom: 1px solid var(--border);
    }

    .section-header {
      margin-bottom: 4rem;
    }

    .label {
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 1rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    h2 em {
      font-style: italic;
      color: var(--accent);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 0;
    
    }

    .service-card {
      padding: 2.5rem 2rem 2.5rem 0;
      
    }

    .service-card:last-child {
      border-right: none;
    }

    .num {
      display: block;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 1rem;
      line-height: 1;
    }

    h3 {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 400;
      margin-bottom: 0.75rem;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 0.9rem;
      color: var(--muted);
      line-height: 1.7;
    }

    @media (max-width: 640px) {
      .services {
        padding: 4rem 1.5rem;
      }
      .service-card {
        border-right: none;
        border-bottom: 1px solid var(--border);
        padding: 2rem 0;
      }
    }

     @media (min-width: 1166px) {
   
      .service-card {
        border: none;
      }
    }

    @media (max-width: 905px) {
   
      .service-card:nth-last-child(1) {
        border-bottom: none;
      }
    }
  `]
})

export class ServicesComponent {
  services: Service[] = [
    {
      number: '01',
      title: 'Web Design',
      description: 'Custom-designed sites built around your brand. Clean, focused layouts that guide visitors to take action.'
    },
    {
      number: '02',
      title: 'Development',
      description: 'Fast, accessible code. We build with modern tools and make sure your site loads quickly on every device.'
    },
    {
      number: '03',
      title: 'SEO Basics',
      description: 'Every site we launch is set up correctly for search — proper structure, meta tags, and page speed sorted.'
    },
    {
      number: '04',
      title: 'Ongoing Care',
      description: 'Monthly maintenance plans available. We keep things updated, secure, and running smoothly over time.'
    }
  ];
}
