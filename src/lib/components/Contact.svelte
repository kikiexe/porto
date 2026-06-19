<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { getGsap, EASE, DURATION } from '$lib/utils/gsap';

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
  let errorMsg = $state('');

  async function handleSubmit(e: Event) {
    e.preventDefault();
    status = 'sending';
    errorMsg = '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      if (data.success) {
        status = 'sent';
        name = '';
        email = '';
        message = '';
      } else {
        status = 'error';
        errorMsg = data.error || 'Something went wrong.';
      }
    } catch {
      status = 'error';
      errorMsg = 'Network error. Please try again.';
    }
  }

  onMount(() => {
    const triggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];

    (async () => {
      const { gsap, ScrollTrigger } = await getGsap();

    triggers.push(ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('#contact .section-label',
          { width: 0, opacity: 0 },
          { width: 'auto', opacity: 1, duration: DURATION.slow, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 65%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.contact-left h2',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION.dramatic, ease: EASE.reveal }
        );
        gsap.fromTo('.contact-left > p',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION.normal, ease: EASE.smooth, delay: 0.3 }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.contact-links',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.contact-row, .contact-links .rule',
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: DURATION.normal, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.contact-form',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.form-group',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: DURATION.normal, ease: EASE.smooth }
        );
        gsap.fromTo('.submit-btn',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: DURATION.normal, ease: EASE.bounce, delay: 0.4 }
        );
      },
    }));
    })();

    return () => triggers.forEach(st => st.kill());
  });
</script>

<section id="contact" class="section">
  <div class="container">
    <span class="section-label">04 — Contact</span>

    <div class="contact-layout">
      <div class="contact-left">
        <h2>Let's work<br /><em>together.</em></h2>
        <p class="muted">
          Open to new opportunities, collaborations, and interesting conversations.
          Don't hesitate to reach out.
        </p>

        <div class="contact-links">
          <a href="mailto:{profile.email}" class="contact-row">
            <span class="mono muted">Email</span>
            <span class="contact-value">{profile.email}</span>
            <span class="arrow">→</span>
          </a>
          <hr class="rule" />
          <a href="https://{profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-row">
            <span class="mono muted">LinkedIn</span>
            <span class="contact-value">ajrilfatah</span>
            <span class="arrow">→</span>
          </a>
          <hr class="rule" />
          <a href="https://github.com/kikiexe" target="_blank" rel="noopener noreferrer" class="contact-row">
            <span class="mono muted">GitHub</span>
            <span class="contact-value">kikiexe</span>
            <span class="arrow">→</span>
          </a>
          <hr class="rule" />
          <div class="contact-row">
            <span class="mono muted">Location</span>
            <span class="contact-value">{profile.location}</span>
          </div>
        </div>
      </div>

      <div class="contact-right">
        <form class="contact-form" onsubmit={handleSubmit}>
          <div class="form-group">
            <label for="name" class="mono">Name</label>
            <input
              id="name"
              type="text"
              bind:value={name}
              placeholder="Your name"
              required
              disabled={status === 'sending'}
            />
          </div>

          <div class="form-group">
            <label for="email" class="mono">Email</label>
            <input
              id="email"
              type="email"
              bind:value={email}
              placeholder="your@email.com"
              required
              disabled={status === 'sending'}
            />
          </div>

          <div class="form-group">
            <label for="message" class="mono">Message</label>
            <textarea
              id="message"
              bind:value={message}
              placeholder="Tell me about your project or idea..."
              rows="5"
              required
              disabled={status === 'sending'}
            ></textarea>
          </div>

          <button type="submit" class="submit-btn mono" disabled={status === 'sending'}>
            {#if status === 'sending'}
              Sending...
            {:else}
              Send Message →
            {/if}
          </button>

          {#if status === 'sent'}
            <p class="form-status success">Message sent successfully. I'll get back to you soon.</p>
          {/if}

          {#if status === 'error'}
            <p class="form-status error-msg">{errorMsg}</p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  /* Left column */
  .contact-left h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-md);
  }

  .contact-left h2 em {
    font-style: italic;
    color: var(--color-highlight);
  }

  .contact-left > p {
    font-size: 1rem;
    max-width: 380px;
    line-height: 1.8;
    margin-bottom: var(--space-lg);
  }

  .contact-links {
    margin-top: var(--space-sm);
  }

  .contact-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) 0;
    transition: var(--transition);
  }

  a.contact-row:hover { padding-left: 0.5rem; }
  a.contact-row:hover .arrow { opacity: 1; transform: translateX(4px); }

  .contact-row .mono {
    min-width: 72px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.68rem;
  }

  .contact-value { font-size: 0.95rem; }

  .arrow {
    margin-left: auto;
    opacity: 0;
    transition: var(--transition);
    color: var(--color-text-muted);
  }

  /* Right column — Form */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .form-group label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-text-muted);
  }

  .form-group input,
  .form-group textarea {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 300;
    padding: 0.8rem 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-rule);
    color: var(--color-text);
    outline: none;
    transition: border-color var(--transition);
    resize: none;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--color-rule);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-bottom-color: var(--color-text);
  }

  .form-group input:disabled,
  .form-group textarea:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-group textarea {
    line-height: 1.7;
    min-height: 120px;
  }

  .submit-btn {
    align-self: flex-start;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.9rem 2.5rem;
    background: var(--color-text);
    color: var(--color-bg);
    border: 1px solid var(--color-text);
    cursor: pointer;
    transition: var(--transition);
    margin-top: var(--space-xs);
  }

  .submit-btn:hover:not(:disabled) {
    background: transparent;
    color: var(--color-text);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .form-status {
    font-size: 0.85rem;
    margin-top: var(--space-xs);
  }

  .success { color: #2d7a4f; }
  .error-msg { color: var(--color-highlight); }

  @media (max-width: 768px) {
    .contact-layout {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
