import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="contact-inner">
        <div class="contact-left">
          <p class="label">Get in touch</p>
          <h2>Let's build<br><em>something good.</em></h2>
          <p class="sub">Tell us about your project and we'll get back to you within one business day.</p>
          <div class="contact-details">
            <p><span>Email</span> hello&#64;webcraftstudio.ie</p>
            <p><span>Based in</span> Kerry, Ireland</p>
          </div>
        </div>
        <div class="contact-right">
          <div class="form" *ngIf="!submitted">
            <div class="field">
              <label for="name">Your name</label>
              <input id="name" type="text" [(ngModel)]="form.name" placeholder="Jane Smith">
            </div>
            <div class="field">
              <label for="email">Email address</label>
              <input id="email" type="email" [(ngModel)]="form.email" placeholder="jane@example.com">
            </div>
            <div class="field">
              <label for="message">What are you working on?</label>
              <textarea id="message" [(ngModel)]="form.message" rows="5" placeholder="Tell us about your project..."></textarea>
            </div>
            <button (click)="submit()" [disabled]="!isValid()">Send message</button>
          </div>
          <div class="success" *ngIf="submitted">
            <p class="success-icon">✓</p>
            <p>Thanks! We'll be in touch soon.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 4rem;
    }

    .contact-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: start;
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
      margin-bottom: 1.25rem;
    }

    h2 em {
      font-style: italic;
      color: var(--accent);
    }

    .sub {
      font-size: 0.95rem;
      color: var(--muted);
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }

    .contact-details p {
      font-size: 0.9rem;
      color: var(--muted);
      margin-bottom: 0.5rem;
    }

    .contact-details span {
      color: var(--ink);
      font-weight: 500;
      margin-right: 0.5rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      margin-bottom: 0.5rem;
      color: var(--ink);
    }

    input, textarea {
      width: 100%;
      background: transparent;
      border: 1px solid var(--border);
      padding: 0.875rem 1rem;
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 300;
      color: var(--ink);
      outline: none;
      transition: border-color 0.2s;
      resize: vertical;
    }

    input::placeholder, textarea::placeholder {
      color: var(--muted);
    }

    input:focus, textarea:focus {
      border-color: var(--ink);
    }

    button {
      background: var(--ink);
      color: var(--paper);
      border: none;
      padding: 0.9rem 2.25rem;
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 0.04em;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    button:hover:not(:disabled) {
      opacity: 0.75;
    }

    button:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .success {
      padding: 3rem 0;
      text-align: center;
    }

    .success-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--accent);
    }

    .success p:last-child {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-style: italic;
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 1.5rem;
      }
      .contact-inner {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
  `]
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;

  isValid(): boolean {
    return this.form.name.trim().length > 0
      && this.form.email.includes('@')
      && this.form.message.trim().length > 10;
  }

  submit(): void {
    if (this.isValid()) {
      this.submitted = true;
    }
  }
}
