<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { gsap, ScrollTrigger, EASE, DURATION } from '$lib/utils/gsap';

  const currentYear = new Date().getFullYear();

  onMount(() => {
    const st = ScrollTrigger.create({
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

    return () => st.kill();
  });
</script>

<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-left">
      <p class="serif footer-name">{profile.name}</p>
      <p class="mono muted">{profile.role}</p>
    </div>

    <div class="footer-right mono muted">
      <p>© {currentYear}</p>
      <p>Built with SvelteKit</p>
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
