import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  const initial = browser
    ? (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    : 'light';

  const { subscribe, set, update } = writable<'light' | 'dark'>(initial);

  return {
    subscribe,
    toggle: () => {
      update(current => {
        const next = current === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.setAttribute('data-theme', next);
        }
        return next;
      });
    },
    init: () => {
      if (browser) {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const theme = saved || 'light';
        set(theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  };
}

export const theme = createThemeStore();
