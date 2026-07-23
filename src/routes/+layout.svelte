<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';
  import { getGsap } from '$lib/utils/gsap';
  import { profile } from '$lib/data/profile';

  let { children } = $props();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "jobTitle": profile.role,
    "email": profile.email,
    "url": profile.url,
    "image": `${profile.url}/images/profile.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sleman",
      "addressRegion": "D.I. Yogyakarta",
      "addressCountry": "ID"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": profile.education.school
    },
    "sameAs": [
      `https://${profile.linkedin}`,
      `https://${profile.github}`
    ],
    "knowsAbout": profile.skills.flatMap(group => group.skills),
    "description": profile.summary
  };

  onMount(() => {
    const handleAnchorClick = async (e: Event) => {
      const anchor = (e.currentTarget as HTMLAnchorElement);
      const targetId = anchor.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (!target) return;

      const { gsap } = await getGsap();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target as Element, offsetY: 80 },
        ease: 'power3.inOut',
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => a.addEventListener('click', handleAnchorClick));

    return () => {
      anchors.forEach(a => a.removeEventListener('click', handleAnchorClick));
    };
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>{profile.name} | {profile.role}</title>
  <meta name="description" content={profile.summary} />
  <meta name="keywords" content="Putra Ajril Fatah, Full Stack Developer, Web3 Developer, Solidity, Move, Smart Contracts, ZK Proofs, SvelteKit, Yogyakarta, Indonesia" />
  <meta name="author" content={profile.name} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={profile.url} />

  <meta property="og:type" content="profile" />
  <meta property="og:title" content={`${profile.name} | ${profile.role}`} />
  <meta property="og:description" content={profile.summary} />
  <meta property="og:url" content={profile.url} />
  <meta property="og:image" content={`${profile.url}/images/profile.png`} />
  <meta property="og:site_name" content={`${profile.name} Portfolio`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${profile.name} | ${profile.role}`} />
  <meta name="twitter:description" content={profile.summary} />
  <meta name="twitter:image" content={`${profile.url}/images/profile.png`} />

  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>

<Navbar />

<main>
  {@render children()}
</main>

<Footer />

<style>
  main {
    min-height: 100vh;
  }
</style>
