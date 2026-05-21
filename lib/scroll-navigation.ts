/**
 * Scroll Navigation State & Parallax Trigger
 *
 * A lightweight pub/sub module that coordinates:
 * 1. Programmatic scroll navigation between Navbar and LeadCatcher scroll-lock
 * 2. Instant parallax demo activation from the "See Plans →" button
 *
 * When the user clicks a nav link to jump to a section below LeadCatcher,
 * the Navbar sets `navigating = true`. LeadCatcher checks this flag before
 * activating its scroll-lock, preventing the lock from hijacking the
 * programmatic scroll.
 *
 * When the user clicks "See Plans →" in the Hero, `triggerParallaxDemo()`
 * is called. LeadCatcher listens for this and instantly activates the
 * overlay with the phone at full size (skipping the entrance animation).
 */

type Listener = (navigating: boolean) => void;

let isNavigating = false;
const listeners = new Set<Listener>();

/** Set the navigation state. Call with `true` before programmatic scroll, `false` after. */
export function setNavigating(navigating: boolean) {
  isNavigating = navigating;
  listeners.forEach((fn) => fn(navigating));
}

/** Get the current navigation state. */
export function getNavigating(): boolean {
  return isNavigating;
}

/**
 * Subscribe to navigation state changes.
 * Returns an unsubscribe function.
 */
export function onNavigatingChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// ─── Parallax Demo Trigger (module-level callback — no pub/sub timing issues) ──

/** Callback registered by LeadCatcher to activate the parallax demo overlay. */
let parallaxTriggerFn: (() => void) | null = null;

/**
 * Register the parallax demo trigger callback.
 * Called by LeadCatcher's useEffect on mount.
 */
export function setParallaxTriggerFn(fn: (() => void) | null) {
  parallaxTriggerFn = fn;
}

/**
 * Trigger the parallax demo instantly.
 * Called by "See Plans →" button in Hero and "Plans" nav link in Navbar.
 * This synchronously calls the callback registered by LeadCatcher — no pub/sub,
 * no useEffect timing issues.
 */
export function triggerParallaxDemo() {
  parallaxTriggerFn?.();
}
