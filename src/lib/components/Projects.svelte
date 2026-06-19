<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { projects } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';
  import { gsap, ScrollTrigger, EASE, DURATION } from '$lib/utils/gsap';

  let activeCategory = $state('all');
  const categories = ['all', 'web3', 'web', 'mobile'];

  const filteredProjects = $derived(
    activeCategory === 'all'
      ? projects
      : projects.filter(p => p.category === activeCategory)
  );

  async function setCategory(cat: string) {
    // Fade out current items
    const rows = document.querySelectorAll('.project-row');
    if (rows.length > 0) {
      await gsap.to('.project-row', {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.03,
        ease: EASE.smooth,
      });
    }

    activeCategory = cat;
    await tick(); // tunggu Svelte re-render

    // Clear any residual GSAP inline styles on new elements, then animate in
    const newRows = document.querySelectorAll('.project-row');
    if (newRows.length > 0) {
      gsap.set(newRows, { clearProps: 'all' });
      gsap.fromTo(newRows,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.fast,
          stagger: 0.06,
          ease: EASE.smooth,
        }
      );
    }
  }

  onMount(() => {
    const triggers: ScrollTrigger[] = [];

    triggers.push(ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('#projects .section-label',
          { width: 0, opacity: 0 },
          { width: 'auto', opacity: 1, duration: DURATION.slow, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.projects-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION.normal, ease: EASE.smooth }
        );
        gsap.fromTo('.filter-btn',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: DURATION.fast, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.projects-list',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.project-row',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: DURATION.normal, ease: EASE.smooth }
        );
      },
    }));

    return () => triggers.forEach(st => st.kill());
  });
</script>

<section id="projects" class="section">
  <div class="container">
    <span class="section-label">02 — Selected Work</span>

    <div class="projects-header">
      <h2>Projects</h2>
      <div class="filter-bar">
        {#each categories as category}
          <button
            class="filter-btn mono"
            class:active={activeCategory === category}
            onclick={() => setCategory(category)}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>

    <div class="projects-list">
      {#each filteredProjects as project, i (project.title)}
        <ProjectCard {project} index={i} />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: var(--space-md);
    border-bottom: 1px solid var(--color-text);
    padding-bottom: var(--space-sm);
  }

  .projects-header h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 0;
    letter-spacing: -0.02em;
  }

  .filter-bar {
    display: flex;
    gap: 0.5rem;
  }

  .filter-btn {
    background: none;
    border: none;
    color: var(--color-text-muted);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
    transition: var(--transition);
  }

  .filter-btn:hover {
    color: var(--color-text);
  }

  .filter-btn.active {
    color: var(--color-text);
    border-bottom: 1.5px solid var(--color-text);
  }

  .projects-list {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .projects-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
  }
</style>
