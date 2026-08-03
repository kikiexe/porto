<script lang="ts">
  import { onMount } from 'svelte';
  import { language, type Language } from '$lib/stores/language';

  let currentLang = $state<Language>('en');

  onMount(() => {
    language.init();
    const unsubscribe = language.subscribe(value => {
      currentLang = value;
    });
    return unsubscribe;
  });

  function selectLanguage(lang: Language) {
    language.set(lang);
  }

  const dashes = '-' + '-';
  const colorRuleLight = `var(${dashes}color-rule-light)`;
  const colorTextMuted = `var(${dashes}color-text-muted)`;
  const colorHighlight = `var(${dashes}color-highlight)`;
</script>

<div class="lang-toggle-capsule" style="border-color: {colorRuleLight}">
  <div class="lang-pill-indicator" class:id-active={currentLang === 'id'} style="background-color: {colorHighlight}"></div>

  <button 
    class="lang-btn mono" 
    class:active={currentLang === 'en'}
    style="color: {currentLang === 'en' ? '#fff' : colorTextMuted}"
    onclick={() => selectLanguage('en')}
    aria-label="Set language to English"
  >
    EN
  </button>
  <button 
    class="lang-btn mono" 
    class:active={currentLang === 'id'}
    style="color: {currentLang === 'id' ? '#fff' : colorTextMuted}"
    onclick={() => selectLanguage('id')}
    aria-label="Set language to Indonesian"
  >
    ID
  </button>
</div>

<style>
  .lang-toggle-capsule {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    display: flex;
    align-items: center;
    border: 1px solid;
    padding: 3px;
    border-radius: 30px;
    background: rgba(245, 240, 235, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 1100;
    width: 90px;
    height: 38px;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
  }

  :global([data-theme="dark"]) .lang-toggle-capsule {
    background: rgba(26, 26, 24, 0.5);
  }

  .lang-toggle-capsule:hover {
    transform: translateY(-4px);
  }

  .lang-pill-indicator {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 41px;
    height: 30px;
    border-radius: 20px;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;
  }

  .lang-pill-indicator.id-active {
    transform: translateX(41px);
  }

  .lang-btn {
    position: relative;
    flex: 1;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.7rem;
    font-weight: 500;
    text-align: center;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.25s ease;
  }

  @media (max-width: 768px) {
    .lang-toggle-capsule {
      bottom: 1.5rem;
      left: 1.5rem;
    }
  }
</style>
