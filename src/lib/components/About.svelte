<script lang="ts">
  import { onMount } from 'svelte';
  import { profile } from '$lib/data/profile';
  import { language, type Language } from '$lib/stores/language';
  import { translations } from '$lib/data/translations';
  import { getGsap, EASE, DURATION } from '$lib/utils/gsap';

  let currentLang = $state<Language>('en');

  onMount(() => {
    const unsubscribeLang = language.subscribe(v => {
      currentLang = v;
    });
    const triggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];

    (async () => {
      const { gsap, ScrollTrigger } = await getGsap();

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
          gsap.fromTo('.about-bio-text',
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: DURATION.dramatic, ease: EASE.reveal }
          );
          gsap.fromTo('.about-bio-photo',
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: DURATION.dramatic, ease: EASE.reveal, delay: 0.2 }
          );
        },
      }));

      triggers.push(ScrollTrigger.create({
        trigger: '.about-history-row',
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
    })();

    return () => {
      triggers.forEach(st => st.kill());
      unsubscribeLang();
    };
  });
</script>

<section id="about" class="section">
  <div class="container">
    <span class="section-label">{translations[currentLang].aboutSub}</span>

    <div class="about-grid">
      <div class="about-bio-row">
        <div class="about-bio-text">
          <h2>{@html currentLang === 'id' ? 'Seorang pengembang yang membangun di persimpangan <em>web</em> dan <em>blockchain</em>.' : 'A developer building at the intersection of <em>web</em> and <em>blockchain</em>.'}</h2>
          <p class="muted">{profile.summary[currentLang]}</p>

          <div class="spotify-status">
            <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&redirect=true" target="_blank" rel="noopener noreferrer">
              <img
                src="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&profanity=true&hide_remaster=true&bar_color=53b14f&bar_color_cover=true"
                alt="Spotify Status"
              />
            </a>
          </div>
        </div>

        <div class="about-bio-photo">
          <div class="profile-photo-border">
            <img src="/images/profile.png" alt={profile.name} class="profile-photo" />
          </div>
        </div>
      </div>

      <hr class="rule section-divider" />

      <div class="about-history-row">
        <div class="history-col education-col">
          <div class="education-block">
            <div class="education-content">
              <span class="mono muted block-title">{currentLang === 'id' ? 'Pendidikan' : 'Education'}</span>
              <p class="school">{profile.education.school}</p>
              <p class="muted">{profile.education.degree[currentLang]}</p>
              <p class="mono" style="margin-top: 0.25rem">{profile.education.gpa} · {profile.education.period}</p>
              {#if profile.education.thesis}
                <p class="mono muted thesis-text">{profile.education.thesis[currentLang]}</p>
              {/if}
            </div>
            <img src="/images/Amikom.svg" alt="Amikom" class="education-logo" />
          </div>
        </div>

        <div class="history-col experience-col">
          <span class="mono muted block-title">{currentLang === 'id' ? 'Pengalaman' : 'Experience'}</span>
          {#each profile.experience as job}
            <div class="exp-item">
              <p class="exp-company">{job.role[currentLang]} <span class="muted">- {job.company}</span></p>
              <p class="mono muted">{typeof job.period === 'object' ? job.period[currentLang] : job.period}</p>
              <ul class="exp-description">
                {#each job.description[currentLang] as point}
                  <li>{point}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .about-bio-row {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
  }

  .about-bio-text h2 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1.25;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }

  .about-bio-text h2 :global(em) {
    font-style: italic;
    color: #c9452b;
  }

  .about-bio-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 540px;
  }

  .about-bio-photo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .profile-photo-border {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    width: 100%;
    max-width: 320px;
    aspect-ratio: 3 / 4;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(120, 120, 120, 0.12);
    background-color: rgba(120, 120, 120, 0.05);
    transition: 
      transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), 
      border-color 0.5s ease, 
      box-shadow 0.5s ease;
  }

  .profile-photo-border::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.25) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    transition: left 0.75s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 2;
    pointer-events: none;
  }

  .profile-photo-border:hover {
    transform: scale(1.03) translateY(-8px) rotate(0.5deg);
    border-color: #c9452b;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.35), 
      0 0 25px rgba(201, 69, 43, 0.25);
  }

  .profile-photo-border:hover::after {
    left: 150%;
  }

  .profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(0.4) contrast(1.05) brightness(0.95);
    transition: filter 0.5s ease;
    z-index: 1;
  }

  .profile-photo-border:hover .profile-photo {
    filter: grayscale(0) contrast(1) brightness(1);
  }

  .section-divider {
    border-top: 1px solid rgba(120, 120, 120, 0.15);
    margin: 0;
  }

  .about-history-row {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: start;
  }

  .history-col {
    display: flex;
    flex-direction: column;
  }

  .block-title {
    display: block;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.7rem;
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

  .school {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 1.15rem;
    margin-bottom: 0.25rem;
  }

  .thesis-text {
    font-size: 0.72rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    max-width: 420px;
    opacity: 0.8;
  }

  .education-logo {
    width: 140px;
    height: auto;
    opacity: 0;
    transform: translateX(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 2rem;
  }

  .education-block:hover .education-logo {
    opacity: 0.1;
    transform: translateX(0);
  }

  .exp-item {
    margin-bottom: 1rem;
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
    color: inherit;
    opacity: 0.7;
    margin-bottom: 0.2rem;
  }

  .spotify-status {
    margin-top: 2rem;
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
    transition: 0.25s ease;
  }

  .spotify-status img:hover {
    filter: grayscale(0);
  }

  #about {
    padding-top: 4rem;
  }

  @media (max-width: 768px) {
    .about-bio-row {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .about-bio-photo {
      justify-content: center;
    }

    .about-history-row {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .spotify-status img {
      max-width: 100%;
    }

    #about {
      padding-top: 3rem;
    }
  }
</style>
