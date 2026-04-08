import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-inner">
        <span class="logo">Wild Atlantic Web Design<span class="dot">.</span></span>
        <p>© {{ year }} Wild Atlantic Web Design. Kerry, Ireland.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem 4rem;
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: var(--font-display);
      font-size: 1.1rem;
      letter-spacing: -0.02em;
    }

    .dot {
      color: var(--accent);
    }

    p {
      font-size: 0.8rem;
      color: var(--muted);
    }

    @media (max-width: 640px) {
      footer {
        padding: 1.5rem;
      }
      .footer-inner {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
