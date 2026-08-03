<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { language, type Language } from '$lib/stores/language';
  import { getGsap, EASE, DURATION } from '$lib/utils/gsap';

  let currentLang = $state<Language>('en');

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tl: any = null;
    let heroST: any = null;

    const unsubscribeLang = language.subscribe(v => {
      currentLang = v;
    });

    (async () => {
      const { gsap } = await getGsap();

      tl = gsap.timeline({ defaults: { ease: EASE.reveal } });

      gsap.set('.hero-top, .hero-name, .hero-tagline, .hero-summary, .hero-actions', {
        opacity: 0,
        y: 40,
      });

      tl.to('.hero-top', {
          opacity: 1, y: 0, duration: DURATION.normal
        })
        .to('.hero-name', {
          opacity: 1, y: 0, duration: DURATION.dramatic,
        }, '-=0.3')
        .to('.hero-tagline', {
          opacity: 1, y: 0, duration: DURATION.normal,
        }, '-=0.6')
        .to('.hero-summary', {
          opacity: 1, y: 0, duration: DURATION.normal,
        }, '-=0.4')
        .to('.hero-actions', {
          opacity: 1, y: 0, duration: DURATION.normal,
        }, '-=0.3');

      heroST = gsap.to('.hero-inner', {
        y: -100,
        opacity: 0.3,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    })();

    return () => {
      tl?.kill();
      heroST?.scrollTrigger?.kill();
      unsubscribeLang();
    };
  });
</script>

<section class="hero">
  <div class="container hero-inner">
    <div class="hero-top">
      <span class="mono muted">{profile.location}</span>
    </div>

    <h1 class="hero-name">
      {profile.name}
    </h1>

    <div class="hero-tagline">
      <p class="serif">{profile.role[currentLang]}</p>
    </div>

    <p class="hero-summary muted">
      {profile.summary[currentLang]}
    </p>

    <div class="hero-actions">
      <a href="#projects" class="btn-solid">{currentLang === 'id' ? 'Karya Pilihan' : 'Selected Work'}</a>
      <a href="/cv.pdf" class="btn-ghost" download>{currentLang === 'id' ? 'Unduh CV ↓' : 'Resume ↓'}</a>
    </div>
  </div>

  <div class="hero-scroll mono muted">
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    min-height: 100dvh;
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
    bottom: calc(2rem + env(safe-area-inset-bottom));
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
    background: var(--color-highlight);
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
