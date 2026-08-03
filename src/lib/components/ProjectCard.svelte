<script lang="ts">
  import { onMount } from 'svelte';
  import type { Project } from '$lib/data/projects';
  import { language, type Language } from '$lib/stores/language';
  import { translations } from '$lib/data/translations';

  let { project, index = 0 }: { project: Project; index?: number } = $props();
  let currentLang = $state<Language>('en');

  onMount(() => {
    const unsubscribeLang = language.subscribe(v => {
      currentLang = v;
    });
    return unsubscribeLang;
  });

  const categoryLabel: Record<'en' | 'id', Record<string, string>> = {
    en: {
      web3: 'Web3 / Blockchain',
      web: 'Web Application',
      mobile: 'Mobile Application',
      game: 'Game Dev',
      tool: 'Developer Tool',
      tools: 'Tools & Automation'
    },
    id: {
      web3: 'Web3 / Blockchain',
      web: 'Aplikasi Web',
      mobile: 'Aplikasi Mobile',
      game: 'Game Dev',
      tool: 'Alat Developer',
      tools: 'Peralatan & Otomasi'
    }
  };
</script>

<a href="/projects/{project.slug}" class="project-row">
  <div class="project-meta">
    <span class="mono muted">{String(index + 1).padStart(2, '0')}</span>
    <span class="mono cat">{categoryLabel[currentLang][project.category] || project.category}</span>
    {#if project.status === 'in-progress'}
      <span class="mono status">{translations[currentLang].inProgress}</span>
    {/if}
  </div>

  <div class="project-body">
    <h3>{project.title}</h3>
    <p class="muted">{project.description[currentLang]}</p>
  </div>

  <div class="project-tags">
    {#each project.tags as tag}
      <span class="tag mono">{tag}</span>
    {/each}
  </div>
</a>

<style>
  .project-row {
    display: grid;
    grid-template-columns: 180px 1fr auto;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--color-rule-light);
    transition: var(--transition);
    align-items: start;
  }

  .project-row:hover {
    padding-left: 0.5rem;
  }

  .project-row:hover .project-body h3 {
    color: var(--color-highlight);
    transition: color var(--transition);
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .cat {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.68rem;
    color: var(--color-text-muted);
  }

  .status {
    color: var(--color-highlight);
    font-size: 0.68rem;
    letter-spacing: 0.05em;
  }

  .project-body h3 {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
    transition: color var(--transition);
  }

  .project-body p {
    font-size: 0.9rem;
    line-height: 1.7;
    max-width: 480px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: flex-end;
    align-self: center;
  }

  .tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border: 1px solid var(--color-rule);
    color: var(--color-text-muted);
    transition: var(--transition);
    cursor: default;
  }

  .tag:hover {
    color: var(--color-highlight);
    border-color: var(--color-highlight);
    background: transparent;
  }

  @media (max-width: 768px) {
    .project-row {
      grid-template-columns: 1fr;
      gap: var(--space-xs);
    }

    .project-meta {
      flex-direction: row;
      gap: var(--space-sm);
      align-items: center;
    }

    .project-tags {
      justify-content: flex-start;
    }
  }
</style>
