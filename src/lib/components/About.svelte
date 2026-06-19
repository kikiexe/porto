<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { gsap, ScrollTrigger, EASE, DURATION } from '$lib/utils/gsap';

  onMount(() => {
    const triggers: ScrollTrigger[] = [];

    triggers.push(ScrollTrigger.create({
      trigger: '#about',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo('#about .section-label',
          { width: 0, opacity: 0 },
          { width: 'auto', opacity: 1, duration: DURATION.slow, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '#about',
      start: 'top 65%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.about-text',
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: DURATION.dramatic, ease: EASE.reveal }
        );
        gsap.fromTo('.about-sidebar',
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: DURATION.dramatic, ease: EASE.reveal, delay: 0.2 }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.about-sidebar',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.exp-item',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION.normal, stagger: 0.12, ease: EASE.smooth }
        );
      },
    }));

    triggers.push(ScrollTrigger.create({
      trigger: '.spotify-status',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo('.spotify-status',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: DURATION.slow, ease: EASE.bounce }
        );
      },
    }));

    return () => triggers.forEach(st => st.kill());
  });
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
            <img
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&profanity=true&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify Status"
            />
          </a>
        </div>
      </div>

      <aside class="about-sidebar">
        <div class="sidebar-block education-block">
          <div class="education-content">
            <span class="mono muted">Education</span>
            <p class="school">{profile.education.school}</p>
            <p class="muted">{profile.education.degree}</p>
            <p class="mono" style="margin-top: 0.25rem">{profile.education.gpa} · {profile.education.period}</p>
          </div>
          <img src="/images/Amikom.svg" alt="Amikom" class="education-logo" />
        </div>

        <hr class="rule" />

        <div class="sidebar-block">
          <span class="mono muted">Experience</span>
          {#each profile.experience as job}
            <div class="exp-item">
              <p class="exp-company">{job.role} <span class="muted">- {job.company}</span></p>
              <p class="mono muted">{job.period}</p>
              <ul class="exp-description">
                {#each job.description as point}
                  <li>{point}</li>
                {/each}
              </ul>
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

  .education-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .education-content {
    flex: 1;
  }

  .education-logo {
    width: 140px;
    height: auto;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;
    margin-left: var(--space-md);
  }

  .education-block:hover .education-logo {
    opacity: 0.1;
    transform: translateX(0);
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

  .exp-description {
    margin-top: 0.4rem;
    padding-left: 1rem;
    list-style: disc;
  }

  .exp-description li {
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin-bottom: 0.2rem;
  }

  .spotify-status {
    margin-top: var(--space-md);
  }

  .spotify-status a {
    display: block;
  }

  .spotify-status img {
    width: 100%;
    max-width: 340px;
    height: auto;
    display: block;
    border-radius: 4px;
    filter: grayscale(0.2);
    transition: var(--transition);
  }

  .spotify-status img:hover {
    filter: grayscale(0);
  }

  @media (max-width: 768px) {
    .about-layout {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }

    .spotify-status img {
      max-width: 100%;
    }
  }

  #about {
    padding-top: var(--space-lg);
  }
</style>
