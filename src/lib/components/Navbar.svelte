<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { gsap, EASE, DURATION } from '$lib/utils/gsap';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);
  let currentTheme = $state<'light' | 'dark'>('light');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  let activeSection = $state('');

  onMount(() => {
    theme.init();

    // Navbar slide-down entrance
    gsap.fromTo('.navbar',
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.smooth,
        delay: 0.2,
        onComplete: () => gsap.set('.navbar', { clearProps: 'opacity,transform' }),
      }
    );

    const unsubscribe = theme.subscribe(v => {
      currentTheme = v;
    });

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);

    const handleOutsideClick = (e: MouseEvent) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(e.target as Node)) {
        isMobileMenuOpen = false;
      }
    };
    document.addEventListener('click', handleOutsideClick);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
      observer.disconnect();
      unsubscribe();
    };
  });

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }
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
          <a
            href={link.href}
            class="nav-link"
            class:active={activeSection === link.href.replace('#', '')}
          >
            {link.name}
          </a>
        {/each}
      </nav>

      <button
        class="theme-toggle"
        onclick={() => theme.toggle()}
        aria-label="Toggle theme"
        title={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        <div class="icon-wrapper" class:dark={currentTheme === 'dark'}>
          <!-- Sun Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <!-- Moon Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
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
      <div class="mobile-nav-content">
        {#each navLinks as link}
          <a href={link.href} class="mobile-link" onclick={closeMenu}>{link.name}</a>
        {/each}
        <button class="mobile-theme mono" onclick={() => theme.toggle()}>
          {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--color-rule-light);
    background: transparent;
  }

  .navbar.scrolled {
    top: 1rem;
    width: calc(100% - 2rem);
    max-width: 900px;
    background: var(--color-navbar-scroll);
    backdrop-filter: blur(25px);
    border: 1px solid var(--color-rule-light);
    border-radius: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    padding: 0.8rem 1.5rem;
  }

  .navbar.scrolled .container {
    padding: 0;
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

  .nav-link.active {
    color: var(--color-text);
  }

  /* Theme toggle */
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 50%;
  }

  .theme-toggle:hover {
    color: var(--color-highlight);
    background: var(--color-bg-alt);
  }

  .icon-wrapper {
    position: relative;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sun-icon, .moon-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
  }

  .sun-icon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .moon-icon {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }

  .icon-wrapper.dark .sun-icon {
    opacity: 0;
    transform: rotate(-90deg) scale(0);
  }

  .icon-wrapper.dark .moon-icon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  /* Mobile */
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 10001;
    position: relative;
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
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .mobile-nav-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
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
