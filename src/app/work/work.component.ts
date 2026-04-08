import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="work" id="work">
      <div class="section-header">
        <p class="label">Selected work</p>
        <h2>Recent projects.</h2>
      </div>
      <div class="projects">
        <div class="project" *ngFor="let p of projects; let i = index">
          <div class="project-visual" [style.background]="p.color">
            <span class="project-index">0{{ i + 1 }}</span>
          </div>
          <div class="project-info">
            <p class="project-category">{{ p.category }}</p>
            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .work {
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
      letter-spacing: -0.02em;
    }

    .projects {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .project {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      border-top: 1px solid var(--border);
      padding: 3rem 0;
      gap: 3rem;
      align-items: start;
      transition: opacity 0.2s;
    }

    .project:hover {
      opacity: 0.8;
    }

    .project-visual {
      aspect-ratio: 16 / 9;
      display: flex;
      align-items: flex-end;
      padding: 1.25rem;
      position: relative;
    }

    .project-index {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 4rem;
      color: rgba(255,255,255,0.25);
      line-height: 1;
      position: absolute;
      bottom: 1rem;
      right: 1.5rem;
    }

    .project-info {
      padding-top: 0.5rem;
    }

    .project-category {
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.75rem;
    }

    h3 {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 400;
      letter-spacing: -0.015em;
      margin-bottom: 0.75rem;
    }

    .project-desc {
      font-size: 0.9rem;
      color: var(--muted);
      line-height: 1.7;
      max-width: 400px;
    }

    @media (max-width: 768px) {
      .work {
        padding: 4rem 1.5rem;
      }
      .project {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 2rem 0;
      }
    }
  `]
})
export class WorkComponent {
  projects: Project[] = [
    {
      title: 'Harbour & Co.',
      category: 'Restaurant — Branding & Web',
      description: 'A new restaurant in Howth needed a site as warm as their food. We built a simple, image-led site with online booking integration.',
      color: '#2c3e35'
    },
    {
      title: 'Clar Solicitors',
      category: 'Legal — Web Design',
      description: 'A small legal firm wanted to look credible without looking stuffy. Clean layout, clear service pages, contact form that actually works.',
      color: '#1e2a3a'
    },
    {
      title: 'Bloom Florals',
      category: 'Retail — E-commerce',
      description: 'A local florist expanding online. We set up a product catalogue and order form, keeping it easy for the owner to manage themselves.',
      color: '#3a2c35'
    }
  ];
}
