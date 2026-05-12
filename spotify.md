# Issue: Mobile Navbar Fix & Hover Improvements

## Overview

Two UI improvements needed in the portfolio site built with SvelteKit + Svelte 5 (runes mode).

---

## Issue 1 — Mobile Navbar: Menu Doesn't Close on Outside Click

**File:** `src/lib/components/Navbar.svelte`

**Problem:**
When the mobile menu is open and the user clicks/taps outside the nav area, the menu stays open. The only way to close it is to tap the hamburger button again or tap one of the nav links.

**Expected behavior:**
Clicking outside the mobile menu overlay should close it.

**Fix instructions:**

In the `onMount` block inside `<script lang="ts">`, add a click listener on `document` that closes the menu if the click target is outside the `.navbar` element.

```ts
// Inside onMount, add:
const handleOutsideClick = (e: MouseEvent) => {
  const navbar = document.querySelector('.navbar');
  if (navbar && !navbar.contains(e.target as Node)) {
    isMobileMenuOpen = false;
  }
};
document.addEventListener('click', handleOutsideClick);

// And in the cleanup return:
return () => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleOutsideClick);
  unsubscribe();
};
```

---

## Issue 2 — Mobile Navbar: Body Scroll Not Locked When Menu Is Open

**File:** `src/lib/components/Navbar.svelte`

**Problem:**
When the mobile menu (fullscreen overlay) is open, the page behind it is still scrollable. This feels broken on mobile — users can accidentally scroll while the menu is open.

**Expected behavior:**
When `isMobileMenuOpen === true`, the body should not scroll. When the menu closes, scrolling should be restored.

**Fix instructions:**

Add a `$effect` (Svelte 5 rune) that watches `isMobileMenuOpen` and toggles `overflow: hidden` on the body:

```ts
$effect(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }
});
```

Place this inside `<script lang="ts">` (outside `onMount`, at the top level — `$effect` runs after mount automatically in runes mode).

---

## Issue 3 — Mobile Navbar: Active Section Not Highlighted in Nav Links

**File:** `src/lib/components/Navbar.svelte`

**Problem:**
When the user scrolls to a section (e.g., `#about`, `#projects`), the corresponding nav link does not reflect the active state. All links look identical regardless of scroll position.

**Expected behavior:**
The nav link corresponding to the currently visible section should have an `.active` class applied, making it visually distinct (e.g., `color: var(--color-text)` instead of `var(--color-text-muted)`).

**Fix instructions:**

1. Add a `activeSection` state variable:
```ts
let activeSection = $state('');
```

2. Inside `onMount`, add an `IntersectionObserver`:
```ts
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

// Add to cleanup:
observer.disconnect();
```

3. Update nav link markup to bind active class:
```svelte
<a
  href={link.href}
  class="nav-link"
  class:active={activeSection === link.href.replace('#', '')}
>
  {link.name}
</a>
```

4. Add active style in `<style>`:
```css
.nav-link.active {
  color: var(--color-text);
}
```

---

## Issue 4 — ProjectCard: No Hover Feedback on Row

**File:** `src/lib/components/ProjectCard.svelte`

**Problem:**
The `.project-row` has a `padding-left` shift on hover, but there is no color or opacity change. On a light background, the shift alone is barely noticeable and doesn't feel interactive.

**Expected behavior:**
On hover, the project title should subtly shift color toward `var(--color-highlight)` to signal interactivity clearly.

**Fix instructions:**

In the `<style>` block, update the hover rule:

```css
/* existing */
.project-row:hover {
  padding-left: 0.5rem;
}

/* add this */
.project-row:hover .project-body h3 {
  color: var(--color-highlight);
  transition: color var(--transition);
}
```

Also add `transition` to `h3` base style so the color animates in/out:

```css
.project-body h3 {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
  transition: color var(--transition); /* add this */
}
```

---

## Issue 5 — Skills: Hover Color Doesn't Transition Smoothly

**File:** `src/lib/components/Skills.svelte`

**Problem:**
The `skill-list li` hover already has `padding-left` and color change, but the `transition` property is applied via `var(--transition)` which covers `all`. This can cause unexpected transitions on properties like `border` or `box-shadow` in future. Also, the `padding-left` shift has no transition, making it feel abrupt.

**Expected behavior:**
The hover shift should animate smoothly. Only `color` and `padding-left` should be transitioned.

**Fix instructions:**

Replace the existing `skill-list li` style:

```css
.skill-list li {
  font-size: 0.95rem;
  color: var(--color-text);
  padding: 0.2rem 0;
  padding-left: 0; /* explicit base */
  transition: color 0.25s ease, padding-left 0.25s ease; /* scoped, not `all` */
}

.skill-list li:hover {
  padding-left: 0.5rem;
  color: var(--color-highlight);
}
```

---

---

## Issue 6 — Hero: Scroll Indicator Not Visible on iPhone X (and Notched Devices)

**File:** `src/lib/components/Hero.svelte`

**Problem:**
The animated scroll line at the bottom of the hero section (`div.hero-scroll`) is not visible or gets clipped on iPhone X (375×812px viewport). Two root causes:

1. `.hero-scroll` uses `position: absolute; bottom: 2rem` — on iPhone X, the home indicator safe area (approximately 34px) eats into `2rem`, pushing the element behind the gesture bar.
2. `.hero` uses `min-height: 100vh` — on iOS Safari, `100vh` is calculated as the full viewport including the browser chrome (address bar), so when the address bar is visible the section is taller than the visible area, pushing `.hero-scroll` off screen.

**Expected behavior:**
The scroll indicator should always be visible at the bottom of the visible hero area on all mobile devices, including notched iPhones.

**Fix instructions:**

Replace the relevant CSS in `src/lib/components/Hero.svelte`:

```css
/* 1. Fix 100vh on iOS Safari by using dvh (dynamic viewport height) with vh fallback */
.hero {
  min-height: 100vh;
  min-height: 100dvh; /* overrides on browsers that support it */
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 6rem;
}

/* 2. Account for iPhone X safe area on the scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 2rem;
  bottom: calc(2rem + env(safe-area-inset-bottom)); /* pushes above home indicator */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* 3. Hide the scroll indicator entirely on very small screens where vertical space is tight */
@media (max-width: 480px) {
  .hero-scroll {
    display: none;
  }
}
```

Also make sure `src/app.html` has the correct viewport meta tag to opt into safe area insets. Check that the `<meta name="viewport">` tag includes `viewport-fit=cover`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

Without `viewport-fit=cover`, `env(safe-area-inset-bottom)` returns `0` and the fix has no effect.

---

## Summary Table

| # | File | Type | Priority |
|---|------|------|----------|
| 1 | `Navbar.svelte` | Bug — outside click doesn't close menu | High |
| 2 | `Navbar.svelte` | Bug — body scrolls behind open menu | High |
| 3 | `Navbar.svelte` | Enhancement — active section highlight | Medium |
| 4 | `ProjectCard.svelte` | Enhancement — hover color on title | Low |
| 5 | `Skills.svelte` | Refinement — smooth hover transition | Low |
| 6 | `Hero.svelte` + `app.html` | Bug — scroll indicator hidden on iPhone X | High |
| 7 | `About.svelte` | Bug — Spotify widget not responsive on all devices | Medium |

---

## Issue 7 — About: Spotify Widget Not Responsive

**File:** `src/lib/components/About.svelte`

**Problem:**
The Spotify status widget is rendered as a raw `<img>` with a hardcoded `height="150"` attribute and no width constraint. This causes two problems:

1. On mobile (single-column layout), the image can overflow its container or appear misaligned because it has no `max-width` and sits inside `.about-text` which has `max-width: 500px` on the paragraph but no constraint on the image wrapper.
2. The external Spotify image URL returns a fixed-dimension image — if the container is narrower than the image's intrinsic width, it either overflows or gets squished depending on the browser.

**Expected behavior:**
The Spotify widget should scale fluidly within its container on all screen sizes — full width on mobile, naturally sized on desktop — without overflow or distortion.

**Fix instructions:**

In `src/lib/components/About.svelte`, wrap the widget in a dedicated container and apply responsive CSS. Replace the current `.spotify-status` block markup:

```svelte
<!-- BEFORE -->
<div class="spotify-status">
  <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&redirect=true" target="_blank" rel="noopener noreferrer">
    <img src="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&profanity=true&bar_color=53b14f&bar_color_cover=false" height="150" alt="Spotify Status" />
  </a>
</div>

<!-- AFTER -->
<div class="spotify-status">
  <a href="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&redirect=true" target="_blank" rel="noopener noreferrer">
    <img
      src="https://spotify-github-profile.kittinanx.com/api/view?uid=pqmdjhoiqiiapqgyiju3ns7x1&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&profanity=true&bar_color=53b14f&bar_color_cover=false"
      alt="Spotify Status"
    />
  </a>
</div>
```

Note: **Remove the `height="150"` attribute entirely** — it overrides CSS and breaks fluid scaling.

Then add these styles inside the `<style>` block in `About.svelte`:

```css
.spotify-status {
  margin-top: var(--space-md);
}

.spotify-status a {
  display: block; /* prevents inline gap under image */
}

.spotify-status img {
  width: 100%;          /* fill container width */
  max-width: 340px;     /* cap at a reasonable desktop size */
  height: auto;         /* maintain aspect ratio */
  display: block;
  border-radius: 4px;   /* optional: softens the edges slightly */
}

@media (max-width: 768px) {
  .spotify-status img {
    max-width: 100%;    /* on mobile, let it fill the full column */
  }
}
```

**Why `max-width: 340px` on desktop:** the Spotify card image from this provider renders at roughly 340px wide at its native resolution. Letting it go wider would make it blurry (upscaled raster). On mobile single-column, `100%` is appropriate since the column itself is already width-constrained by the container padding.

---

## Notes for the implementing model

- This project uses **Svelte 5 runes mode** (`$state`, `$derived`, `$effect`). Do NOT use `$:` reactive statements or the old `writable` store pattern inside components.
- All CSS uses **CSS custom properties** from `src/app.css` (e.g. `var(--color-highlight)`, `var(--transition)`). Use those variables, do not hardcode colors or durations.
- Do not install new dependencies. All fixes are pure CSS/JS/Svelte.
- Test each fix in isolation before moving to the next.