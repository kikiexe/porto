<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';
  import { gsap } from '$lib/utils/gsap';

  let { children } = $props();

  onMount(() => {
    // Intercept anchor clicks untuk smooth scroll via GSAP
    const handleAnchorClick = (e: Event) => {
      const anchor = (e.currentTarget as HTMLAnchorElement);
      const targetId = anchor.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (!target) return;

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
  <title>Putra Ajril Fatah | Full Stack & Web3 Developer</title>
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
