<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { language, type Language } from '$lib/stores/language';
  import { getGsap, EASE, DURATION } from '$lib/utils/gsap';

  const currentYear = new Date().getFullYear();
  let currentLang = $state<Language>('en');

  onMount(() => {
    const unsubscribeLang = language.subscribe(v => {
      currentLang = v;
    });

    let st: import('gsap/ScrollTrigger').ScrollTrigger | null = null;

    (async () => {
      const { gsap, ScrollTrigger } = await getGsap();

      st = ScrollTrigger.create({
        trigger: '.footer',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.footer-inner',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: DURATION.normal, ease: EASE.smooth }
          );
        },
      });
    })();

    return () => {
      st?.kill();
      unsubscribeLang();
    };
  });
</script>

<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-left">
      <p class="serif footer-name">{profile.name}</p>
      <p class="mono muted">{profile.role[currentLang]}</p>
    </div>

    <div class="footer-right mono muted">
      <p>© {currentYear}</p>
      <p>{currentLang === 'id' ? 'Dibangun dengan SvelteKit' : 'Built with SvelteKit'}</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: var(--space-lg) 0;
    border-top: 1px solid var(--color-rule);
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .footer-name {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .footer-right {
    text-align: right;
    font-size: 0.72rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
    .footer-right { text-align: left; }
  }
</style>
