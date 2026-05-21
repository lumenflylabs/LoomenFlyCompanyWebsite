"use client";

import { useEffect, useRef } from "react";
import { triggerParallaxDemo, setNavigating } from "@/lib/scroll-navigation";

/**
 * Handles hash-based scrolling when navigating from another page (e.g., legal pages)
 * to the homepage with a hash like /#plans, /#addons, /#custom, etc.
 *
 * Mirrors the same behaviour as the Navbar's handleNavClick:
 * - #plans       → instant parallax demo (phone overlay pops up)
 * - #addons etc. → skip parallax scroll-lock, scroll directly to section
 * - #why         → simple smooth scroll (no parallax to interfere)
 *
 * Also listens for hashchange events so that clicking Footer links while
 * already on the homepage still behaves identically.
 */

/** Sections below LeadCatcher — skip parallax, scroll directly (same as Navbar). */
const SECTIONS_BELOW_LEAD_CATCHER = new Set([
  "#addons", "#industries", "#reviews", "#about", "#contact", "#custom",
]);

export default function HashScrollHandler() {
  const navigatingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      // ── #plans — trigger instant parallax demo ─────────────────────
      // Defer with rAF because HashScrollHandler renders BEFORE LeadCatcher
      // in the component tree, so its useEffect fires first — LeadCatcher
      // hasn't registered the parallax trigger callback yet. rAF ensures
      // LeadCatcher's useEffect has run before we call it.
      if (hash === "#plans") {
        requestAnimationFrame(() => {
          triggerParallaxDemo();
        });
        return;
      }

      // ── Sections below LeadCatcher — skip parallax, scroll directly ─
      if (SECTIONS_BELOW_LEAD_CATCHER.has(hash)) {
        setNavigating(true);
        const timer = setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
          // Clear navigating flag after smooth scroll animation completes
          navigatingTimeoutRef.current = setTimeout(() => setNavigating(false), 1000);
        }, 100);
        return timer;
      }

      // ── #why — simple scroll (no parallax to interfere) ────────────
      const timer = setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return timer;
    };

    // Scroll on initial mount (e.g., navigating from /privacy to /#plans)
    const initialTimer = scrollToHash();

    // Handle hash changes while already on the homepage
    // (e.g., clicking Footer "No-Show Protector" link → /#addons)
    const onHashChange = () => {
      scrollToHash();
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      if (navigatingTimeoutRef.current) clearTimeout(navigatingTimeoutRef.current);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  // This component renders nothing — it's purely a side-effect handler
  return null;
}
