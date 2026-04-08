import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <a href="#" class="logo">Wild Atlantic Web Design<span>.</span></a>
      <ul>
        <li><a href="#services">Services</a></li>
        <!-- <li><a href="#work">Work</a></li> -->
        <li><a href="#contact" class="cta">Get in touch</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 4rem;
      background: rgba(245, 242, 236, 0.88);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    nav {
  min-width: 375px;
}

    .logo {
      font-family: var(--font-display);
      font-size: 1.5rem;
      letter-spacing: -0.02em;
    }

    .logo span {
      color: var(--accent);
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }

    ul a {
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0.03em;
      color: var(--muted);
      transition: color 0.2s;
    }

    ul a:hover {
      color: var(--ink);
    }

    .cta {
      color: var(--ink) !important;
      border: 1px solid var(--ink);
      padding: 0.5rem 1.25rem;
      transition: background 0.2s, color 0.2s !important;
    }

    .cta:hover {
      background: var(--ink) !important;
      color: var(--paper) !important;
    }

    @media (max-width: 640px) {
      nav {
        padding: 1.25rem 1.5rem;
      }
      ul li:not(:last-child) {
        display: none;
      }
      
    }
  `]
})
export class NavComponent {}
