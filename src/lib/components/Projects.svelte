<script lang="ts">
  import { projects } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';

  let activeCategory = $state('all');
  const categories = ['all', 'web3', 'web', 'game', 'tool'];

  const filteredProjects = $derived(
    activeCategory === 'all'
      ? projects
      : projects.filter(p => p.category === activeCategory)
  );

  function setCategory(cat: string) {
    activeCategory = cat;
  }
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
