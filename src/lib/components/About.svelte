<script lang="ts">
  import { profile } from '$lib/data/profile';
</script>

<section id="about" class="section">
  <div class="container">
    <span class="section-label">01 — About</span>

    <div class="about-layout">
      <div class="about-text">
        <h2>{@html `A developer building at the intersection of <em>web</em> and <em>blockchain</em>.`}</h2>
        <p class="muted">{profile.summary}</p>

        <div class="spotify-status">
          <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&redirect=true" target="_blank" rel="noopener noreferrer">
            <img src="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&profanity=true&bar_color=53b14f&bar_color_cover=false" height="150" alt="Spotify Status" />
          </a>
        </div>
      </div>

      <aside class="about-sidebar">
        <div class="sidebar-block">
          <span class="mono muted">Education</span>
          <p class="school">{profile.education.school}</p>
          <p class="muted">{profile.education.degree}</p>
          <p class="mono" style="margin-top: 0.25rem">{profile.education.gpa} · {profile.education.period}</p>
        </div>

        <hr class="rule" />

        <div class="sidebar-block">
          <span class="mono muted">Experience</span>
          {#each profile.experience as job}
            <div class="exp-item">
              <p class="exp-company">{job.role} <span class="muted">- {job.company}</span></p>
              <p class="mono muted">{job.period}</p>
            </div>
          {/each}
        </div>
      </aside>
    </div>
  </div>
</section>

<style>
  .about-layout {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  .about-text h2 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.25;
    margin-bottom: var(--space-md);
    letter-spacing: -0.02em;
  }

  .about-text h2 :global(em) {
    font-style: italic;
    color: var(--color-highlight);
  }

  .about-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 500px;
  }

  .sidebar-block {
    padding: var(--space-sm) 0;
  }

  .sidebar-block > .mono:first-child {
    display: block;
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.7rem;
  }

  .school {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    margin-bottom: 0.25rem;
  }

  .exp-item {
    margin-bottom: var(--space-sm);
  }

  .exp-company {
    font-size: 0.95rem;
    font-weight: 400;
  }

  .exp-item .mono {
    font-size: 0.72rem;
  }

  @media (max-width: 768px) {
    .about-layout {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
