<script lang="ts">
  import { profile } from '$lib/data/profile';
</script>

<section class="hero">
  <div class="container hero-inner">
    <div class="hero-top fade-up">
      <span class="mono muted">{profile.location}</span>
    </div>

    <h1 class="hero-name fade-up" style="animation-delay: 0.1s">
      {profile.name}
    </h1>

    <div class="hero-tagline fade-up" style="animation-delay: 0.2s">
      <p class="serif">{profile.role}</p>
    </div>

    <p class="hero-summary muted fade-up" style="animation-delay: 0.3s">
      {profile.summary}
    </p>

    <div class="hero-actions fade-up" style="animation-delay: 0.4s">
      <a href="#projects" class="btn-solid">Selected Work</a>
      <a href="/cv.pdf" class="btn-ghost" download>Resume ↓</a>
    </div>
  </div>

  <div class="hero-scroll mono muted">
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 6rem;
  }

  .hero-inner {
    max-width: 760px;
  }

  .hero-top {
    margin-bottom: var(--space-md);
  }

  .hero-name {
    font-size: clamp(3.2rem, 7vw, 5.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-sm);
  }

  .hero-tagline {
    margin-bottom: var(--space-md);
  }

  .hero-tagline p {
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    font-style: italic;
    color: var(--color-highlight);
  }

  .hero-summary {
    max-width: 540px;
    font-size: 1rem;
    margin-bottom: var(--space-lg);
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    gap: var(--space-sm);
    align-items: center;
  }

  .btn-solid {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.9rem 2rem;
    background: var(--color-text);
    color: var(--color-bg);
    border: 1px solid var(--color-text);
    transition: var(--transition);
  }

  .btn-solid:hover {
    background: transparent;
    color: var(--color-text);
  }

  .btn-ghost {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.9rem 2rem;
    color: var(--color-text-muted);
    border: 1px solid var(--color-rule);
    transition: var(--transition);
  }

  .btn-ghost:hover {
    border-color: var(--color-text);
    color: var(--color-text);
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .scroll-line {
    width: 1px;
    height: 48px;
    background: var(--color-rule);
    position: relative;
    overflow: hidden;
  }

  .scroll-line::after {
    content: '';
    position: absolute;
    top: -100%;
    width: 1px;
    height: 100%;
    background: var(--color-text);
    animation: scrollDown 2s ease infinite;
  }

  @keyframes scrollDown {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @media (max-width: 768px) {
    .hero-actions {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
