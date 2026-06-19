import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register plugins sekali saja
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Default ease yang konsisten di seluruh portfolio
export const EASE = {
  smooth: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  snap: 'power4.out',
  reveal: 'expo.out',
  bounce: 'back.out(1.4)',
} as const;

// Durasi standar
export const DURATION = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  dramatic: 1.4,
} as const;

export { gsap, ScrollTrigger };
