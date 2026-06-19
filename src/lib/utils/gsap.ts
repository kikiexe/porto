import type { gsap as GsapType } from 'gsap';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger';

// Konstanta tidak memerlukan GSAP runtime, aman di-export statically.
// Tidak ada side-effect browser-only, jadi aman untuk SSR.
export const EASE = {
  smooth: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  snap: 'power4.out',
  reveal: 'expo.out',
  bounce: 'back.out(1.4)',
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  dramatic: 1.4,
} as const;

export type GsapModules = {
  gsap: typeof GsapType;
  ScrollTrigger: typeof ScrollTriggerType;
};

// Singleton cache. Dynamic import hanya dieksekusi sekali,
// subsequent calls return cached instance.
let instance: GsapModules | null = null;

/**
 * Lazy-load GSAP dan plugin via dynamic import.
 * Mencegah GSAP masuk ke server bundle saat SSR.
 * Hanya dipanggil di dalam onMount atau event handler di browser.
 */
export async function getGsap(): Promise<GsapModules> {
  if (instance) return instance;

  const [gsapModule, scrollTriggerModule, scrollToModule] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/ScrollToPlugin'),
  ]);

  const gsap = gsapModule.gsap;
  const ScrollTriggerPlugin = scrollTriggerModule.ScrollTrigger;
  const ScrollToPlugin = scrollToModule.ScrollToPlugin;

  gsap.registerPlugin(ScrollTriggerPlugin, ScrollToPlugin);

  instance = { gsap, ScrollTrigger: ScrollTriggerPlugin };
  return instance;
}
