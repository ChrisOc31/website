import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-inner">
        <p class="eyebrow">Web Design Studio — Kerry</p>
        <h1>
          Websites that<br>
          <em>actually work</em><br>
          for your business.
        </h1>
        <p class="sub">
          We design and build clean, fast websites for small businesses and startups
          that want to look credible online — without the agency price tag.
        </p>
        <div class="actions">
          <a href="#contact" class="btn-primary">Start a project</a>
          <!-- <a href="#work" class="btn-ghost">See our work ↓</a> -->
        </div>
      </div>
      <div class="hero-line"></div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8rem 4rem 5rem;
      position: relative;
    }

    .hero-inner {
      max-width: 820px;
      animation: fadeUp 0.9s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .eyebrow {
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 2rem;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 400;
      line-height: 1.08;
      letter-spacing: -0.025em;
      margin-bottom: 2rem;
    }

    h1 em {
      font-style: italic;
      color: var(--accent);
    }

    .sub {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 520px;
      line-height: 1.7;
      margin-bottom: 3rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .btn-primary {
      background: var(--ink);
      color: var(--paper);
      padding: 0.875rem 2rem;
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 0.04em;
      transition: opacity 0.2s;
    }

    .btn-primary:hover {
      opacity: 0.75;
    }

    .btn-ghost {
      font-size: 0.9rem;
      color: var(--muted);
      letter-spacing: 0.02em;
      transition: color 0.2s;
    }

    .btn-ghost:hover {
      color: var(--ink);
    }

    .hero-line {
      position: absolute;
      bottom: 0;
      left: 4rem;
      right: 4rem;
      height: 1px;
      background: var(--border);
    }

    @media (max-width: 640px) {
      .hero {
        padding: 7rem 1.5rem 4rem;
      }
      .hero-line {
        left: 1.5rem;
        right: 1.5rem;
      }
    }
  `]
})
export class HeroComponent {}
