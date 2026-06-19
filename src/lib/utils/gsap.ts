/**
 * GSAP utility module.
 *
 * GSAP is a DOM animation library yang hanya berguna di browser.
 * Semua import dilakukan secara dynamic agar chunk GSAP tidak pernah
 * di-load saat server-side rendering (SSR).
 *
 * Komponen harus memanggil `getGsap()` di dalam `onMount()`.
 */

/** Minimal interface for ScrollTrigger instances (cleanup only). */
export interface Trigger {
  kill(): void;
}

/** Easing presets yang konsisten di seluruh portfolio. */
export const EASE = {
  smooth: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  snap: 'power4.out',
  reveal: 'expo.out',
  bounce: 'back.out(1.4)',
} as const;

/** Durasi standar. */
export const DURATION = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  dramatic: 1.4,
} as const;

let instance: { gsap: any; ScrollTrigger: any } | null = null;

/**
 * Lazy-loads GSAP core + ScrollTrigger + ScrollToPlugin,
 * registers all plugins, dan returns the singleton instance.
 *
 * Hanya boleh dipanggil di browser (dalam `onMount` atau event handler).
 */
export async function getGsap(): Promise<{ gsap: any; ScrollTrigger: any }> {
  if (instance) return instance;

  const module = 'gsap';
  const [{ gsap }, { default: ScrollTrigger }, { default: ScrollToPlugin }] = await Promise.all([
    import(/* @vite-ignore */ `${module}`),
    import(/* @vite-ignore */ `${module}/ScrollTrigger`),
    import(/* @vite-ignore */ `${module}/ScrollToPlugin`),
  ]);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  instance = { gsap, ScrollTrigger };
  return instance;
}
