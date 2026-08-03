import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'id';

function createLanguageStore() {
  const initial = browser
    ? (localStorage.getItem('lang') as Language) || 'en'
    : 'en';

  const { subscribe, set } = writable<Language>(initial);

  return {
    subscribe,
    set: (lang: Language) => {
      if (browser) {
        localStorage.setItem('lang', lang);
      }
      set(lang);
    },
    init: () => {
      if (browser) {
        const saved = localStorage.getItem('lang') as Language | null;
        if (saved) {
          set(saved);
        }
      }
    }
  };
}

export const language = createLanguageStore();
