<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { gsap, ScrollTrigger, EASE, DURATION } from '$lib/utils/gsap';

  const skillGroups = profile.skills;

  onMount(() => {
    const triggers: ScrollTrigger[] = [];

    triggers.push(ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('#skills .section-label',
          { width: 0, opacity: 0 },
          { width: 'auto', opacity: 1, duration: DURATION.slow, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.skills-title',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION.slow, ease: EASE.reveal }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.skills-grid',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.skill-group',
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: { amount: 0.6, grid: [2, 3], from: 'start' },
            duration: DURATION.normal, ease: EASE.smooth,
          }
        );

        document.querySelectorAll('.skill-group').forEach((group) => {
          gsap.fromTo(group.querySelectorAll('.skill-list li'),
            { x: -15, opacity: 0 },
            { x: 0, opacity: 1, stagger: 0.05, duration: DURATION.fast, ease: EASE.smooth, delay: 0.3 }
          );
        });
      },
    }));

    return () => triggers.forEach(st => st.kill());
  });
</script>

<section id="skills" class="section">
  <div class="container">
    <span class="section-label">03 — Stack</span>

    <h2 class="skills-title">Technologies I work with</h2>

    <div class="skills-grid">
      {#each skillGroups as group}
        <div class="skill-group">
          <h4 class="mono group-label">{group.title}</h4>
          <ul class="skill-list">
            {#each group.skills as skill}
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-title {
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.02em;
    margin-bottom: var(--space-lg);
    max-width: 500px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--color-rule);
  }

  .skill-group {
    padding: var(--space-md);
    border-bottom: 1px solid var(--color-rule);
    border-right: 1px solid var(--color-rule);
  }

  .skill-group:nth-child(3n) {
    border-right: none;
  }

  .group-label {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.68rem;
    color: var(--color-text-muted);
    margin-bottom: var(--space-sm);
    font-family: var(--font-mono);
    font-weight: 500;
  }

  .skill-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skill-list li {
    font-size: 0.95rem;
    color: var(--color-text);
    padding: 0.2rem 0;
    padding-left: 0;
    transition: color 0.25s ease, padding-left 0.25s ease;
  }

  .skill-list li:hover {
    padding-left: 0.5rem;
    color: var(--color-highlight);
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .skill-group:nth-child(3n) {
      border-right: 1px solid var(--color-rule);
    }
    .skill-group:nth-child(2n) {
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
    .skill-group, .skill-group:nth-child(n) {
      border-right: none;
    }
  }
</style>
