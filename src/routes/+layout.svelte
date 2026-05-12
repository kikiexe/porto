<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
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
