<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { projects } from '$lib/data/projects';
  import { language, type Language } from '$lib/stores/language';
  import { translations } from '$lib/data/translations';
  import { getGsap, EASE, DURATION } from '$lib/utils/gsap';

  const project = $derived(projects.find(p => p.slug === $page.params.slug));
  let currentLang = $state<Language>('en');

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

  const dashes = '-' + '-';
  const colorHighlight = `var(${dashes}color-highlight)`;
  const colorRule = `var(${dashes}color-rule)`;
  const colorRuleLight = `var(${dashes}color-rule-light)`;
  const colorTextMuted = `var(${dashes}color-text-muted)`;
  const colorText = `var(${dashes}color-text)`;

  onMount(() => {
    const unsubscribeLang = language.subscribe(v => {
      currentLang = v;
    });

    (async () => {
      const { gsap } = await getGsap();

      gsap.fromTo('.back-link',
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: DURATION.fast, ease: EASE.smooth }
      );

      gsap.fromTo('.detail-hero h1',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: DURATION.normal, ease: EASE.smooth, delay: 0.1 }
      );

      gsap.fromTo('.meta-item',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: DURATION.normal, stagger: 0.05, ease: EASE.smooth, delay: 0.2 }
      );

      gsap.fromTo('.content-section',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: DURATION.normal, stagger: 0.1, ease: EASE.smooth, delay: 0.3 }
      );
    })();

    return unsubscribeLang;
  });
</script>

<div class="project-detail-container" style="color: {colorText}">
  {#if project}
    <div class="back-wrap">
      <a href="/" class="back-link mono" style="color: {colorTextMuted}">
        &larr; {translations[currentLang].backToWork}
      </a>
    </div>

    <header class="detail-hero">
      <h1>{project.title}</h1>

      <div class="meta-grid">
        <div class="meta-item">
          <span class="mono" style="color: {colorTextMuted}">{translations[currentLang].category}</span>
          <p>{categoryLabel[currentLang][project.category] || project.category}</p>
        </div>
        <div class="meta-item">
          <span class="mono" style="color: {colorTextMuted}">{translations[currentLang].status}</span>
          <p class="status-badge" class:in-progress={project.status === 'in-progress'} style={project.status === 'in-progress' ? `color: ${colorHighlight}` : ''}>
            {project.status === 'completed' ? translations[currentLang].completed : translations[currentLang].inProgress}
          </p>
        </div>
        <div class="meta-item">
          <span class="mono" style="color: {colorTextMuted}">{translations[currentLang].tech}</span>
          <div class="tags-wrap">
            {#each project.tags as tag}
              <span class="tag mono" style="border-color: {colorRule}; color: {colorTextMuted}">{tag}</span>
            {/each}
          </div>
        </div>
        <div class="meta-item">
          <span class="mono" style="color: {colorTextMuted}">{translations[currentLang].links}</span>
          {#if project.links && (project.links.github || project.links.live)}
            <div class="links-wrap">
              {#if project.links.github}
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" class="link-btn" style="color: {colorHighlight}">GitHub</a>
              {/if}
              {#if project.links.live}
                <a href={project.links.live} download={project.links.live.endsWith('.apk') ? 'app-release.apk' : undefined} target={project.links.live.endsWith('.apk') ? undefined : '_blank'} rel="noopener noreferrer" class="link-btn" style="color: {colorHighlight}">
                  {project.links.live.endsWith('.apk') ? (currentLang === 'id' ? 'Pasang Aplikasi' : 'Install App') : (currentLang === 'id' ? 'Demo Langsung' : 'Live Demo')}
                </a>
              {/if}
            </div>
          {:else}
            <p class="mono text-notice" style="color: {colorTextMuted}">{translations[currentLang].privateProject}</p>
          {/if}
        </div>
      </div>
    </header>

    {#if project.image}
      <div class="banner-wrap content-section" class:mobile-frame={project.category === 'mobile'}>
        <img src={project.image} alt={project.title} class="project-banner" />
      </div>
    {/if}

    <hr class="divider" style="border-top-color: {colorRuleLight}" />

    <div class="detail-grid">
      <div class="detail-main content-section">
        <section class="info-block">
          <h2>{translations[currentLang].overview}</h2>
          <p>{project.description[currentLang]}</p>
        </section>

        {#if project.details}
          <section class="info-block">
            <h2>{translations[currentLang].challenge}</h2>
            <p>{project.details.problem[currentLang]}</p>
          </section>

          <section class="info-block">
            <h2>{translations[currentLang].solution}</h2>
            <p>{project.details.solution[currentLang]}</p>
          </section>
        {/if}
      </div>

      <div class="detail-side content-section">
        {#if project.details}
          <section class="info-block">
            <h2>{translations[currentLang].features}</h2>
            <ul class="bullet-list">
              {#each project.details.features[currentLang] as feature}
                <li>
                  <span class="bullet" style="color: {colorHighlight}">•</span>
                  <span style="color: {colorTextMuted}">{feature}</span>
                </li>
              {/each}
            </ul>
          </section>

          <section class="info-block">
            <h2>{translations[currentLang].architecture}</h2>
            <ul class="bullet-list">
              {#each project.details.architecture[currentLang] as arch}
                <li>
                  <span class="bullet" style="color: {colorHighlight}">•</span>
                  <span style="color: {colorTextMuted}">{arch}</span>
                </li>
              {/each}
            </ul>
          </section>
        {/if}
      </div>
    </div>
  {:else}
    <div class="error-state">
      <h2>{translations[currentLang].notFoundTitle}</h2>
      <p class="mono" style="color: {colorTextMuted}">{translations[currentLang].notFoundDesc}</p>
      <a href="/" class="back-link mono" style="color: {colorHighlight}">&larr; {translations[currentLang].returnHome}</a>
    </div>
  {/if}
</div>

<style>
  .project-detail-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 8rem 1.5rem 6rem;
  }

  .back-wrap {
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: opacity 0.25s ease;
  }

  .back-link:hover {
    opacity: 0.7;
  }

  .detail-hero h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  .meta-item span {
    display: block;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .meta-item p {
    font-size: 0.95rem;
  }

  .status-badge {
    text-transform: capitalize;
  }

  .tags-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 8px;
    border: 1px solid;
  }

  .links-wrap {
    display: flex;
    gap: 1rem;
  }

  .link-btn {
    font-size: 0.9rem;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: opacity 0.25s ease;
  }

  .link-btn:hover {
    opacity: 0.7;
  }

  .text-notice {
    font-size: 0.75rem;
  }

  .banner-wrap {
    margin: 2rem 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--color-rule-light);
  }

  .banner-wrap.mobile-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 1rem;
    background: rgba(255, 255, 255, 0.02);
  }

  .banner-wrap.mobile-frame .project-banner {
    width: auto;
    max-width: 360px;
    max-height: 640px;
    border-radius: 16px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--color-rule-light);
  }

  .project-banner {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .divider {
    border: none;
    border-top: 1px solid;
    margin: 2.5rem 0;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
  }

  .info-block {
    margin-bottom: 3rem;
  }

  .info-block h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    letter-spacing: -0.01em;
  }

  .info-block p {
    font-size: 1rem;
    line-height: 1.8;
  }

  .bullet-list {
    list-style: none;
    padding-left: 0;
  }

  .bullet-list li {
    display: flex;
    gap: 0.5rem;
    align-items: start;
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }

  .bullet {
    flex-shrink: 0;
  }

  .error-state {
    text-align: center;
    padding: 6rem 0;
  }

  .error-state h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .error-state p {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .project-detail-container {
      padding-top: 6rem;
    }

    .detail-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .meta-grid {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  }
</style>
