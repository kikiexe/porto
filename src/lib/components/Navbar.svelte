<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);
  let currentTheme = $state<'light' | 'dark'>('light');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  onMount(() => {
    theme.init();

    const unsubscribe = theme.subscribe(v => {
      currentTheme = v;
    });

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  });

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header class="navbar" class:scrolled={isScrolled}>
  <div class="container nav-inner">
    <a href="/" class="logo" onclick={closeMenu}>
      Putra Ajril<span class="highlight">.</span>
    </a>

    <div class="nav-right">
      <nav class="desktop-nav">
        {#each navLinks as link}
          <a href={link.href} class="nav-link">{link.name}</a>
        {/each}
      </nav>

      <button
        class="theme-toggle"
        onclick={() => theme.toggle()}
        aria-label="Toggle theme"
        title={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        <div class="toggle-track" class:dark={currentTheme === 'dark'}>
          <div class="toggle-thumb"></div>
        </div>
      </button>

      <button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle menu">
        <div class="bar-wrap" class:open={isMobileMenuOpen}>
          <span></span><span></span>
        </div>
      </button>
    </div>
  </div>

  {#if isMobileMenuOpen}
    <nav class="mobile-nav">
      {#each navLinks as link}
        <a href={link.href} class="mobile-link" onclick={closeMenu}>{link.name}</a>
      {/each}
      <button class="mobile-theme mono" onclick={() => theme.toggle()}>
        {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: var(--transition);
    padding: 1.5rem 0;
  }

  .navbar.scrolled {
    background: var(--color-navbar-scroll);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-rule-light);
    padding: 1rem 0;
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    letter-spacing: -0.02em;
  }

  .desktop-nav {
    display: flex;
    gap: 2.5rem;
  }

  .nav-link {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .nav-link:hover {
    color: var(--color-text);
  }

  /* Theme toggle */
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .toggle-track {
    width: 36px;
    height: 18px;
    border-radius: 9px;
    border: 1px solid var(--color-rule);
    background: var(--color-bg-alt);
    position: relative;
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  .toggle-track.dark {
    background: var(--color-text-muted);
    border-color: var(--color-text-muted);
  }

  .toggle-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-text);
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .toggle-track.dark .toggle-thumb {
    transform: translateX(18px);
    background: var(--color-bg);
  }

  /* Mobile */
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
  }

  .bar-wrap {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 22px;
  }

  .bar-wrap span {
    display: block;
    height: 1.5px;
    background: var(--color-text);
    transition: var(--transition);
    transform-origin: center;
  }

  .bar-wrap.open span:first-child { transform: rotate(45deg) translateY(5px); }
  .bar-wrap.open span:last-child { transform: rotate(-45deg) translateY(-5px); }

  .mobile-nav {
    position: fixed;
    inset: 0;
    background: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    z-index: 999;
  }

  .mobile-link {
    font-family: var(--font-serif);
    font-size: 2.5rem;
    color: var(--color-text);
  }

  .mobile-link:hover { color: var(--color-highlight); }

  .mobile-theme {
    background: none;
    border: 1px solid var(--color-rule);
    color: var(--color-text-muted);
    padding: 0.6rem 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    transition: var(--transition);
  }

  .mobile-theme:hover {
    border-color: var(--color-text);
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    .desktop-nav { display: none; }
    .mobile-toggle { display: block; }
  }
</style>
