# Lead Catcher — Scroll-Lock Takeover Plan

## Concept

When the user scrolls down and the phone enters the viewport, **page scrolling locks**. The phone becomes the **ONLY focus** — it scales up to dominate the screen, with **blur overlays** above and below to hide other page content. The user can only scroll **INSIDE the phone** (the chat/Flow content). After the demo sequence completes (scroll progress reaches 100%), the page **unlocks** and normal scrolling resumes.

This is the premium "scroll-jacking" pattern used by high-end product landing pages (Apple, Stripe, Linear).

---

## Implementation Details

### 1. Scroll Lock Mechanism

- Use `useEffect` with `IntersectionObserver` on the section ref
- When the section enters viewport (intersection ratio > 0), set `document.body.style.overflow = "hidden"`
- When the demo completes (scrollProgress >= 1), set `document.body.style.overflow = ""`
- Use a `isLocked` state variable to track lock status
- On cleanup (component unmount), always restore overflow

### 2. Phone Scaling & Positioning

- Phone starts at `scale(0.4)` when section first enters viewport
- As user scrolls (inside the locked section), phone scales up to `scale(1.0)` at 85% progress
- Phone is **centered** in the viewport using `position: fixed` or `sticky` with centering
- Phone width: `clamp(240px, 50vw, 380px)` — larger than current

### 3. Blur Overlays

- **Top blur**: Fixed position at top of viewport, height ~30% of viewport, gradient from `rgba(26,24,16,1)` to `rgba(26,24,16,0)`
- **Bottom blur**: Fixed position at bottom of viewport, height ~30% of viewport, gradient from `rgba(26,24,16,0)` to `rgba(26,24,16,1)`
- These create a "vignette" effect that hides the rest of the page content
- Opacity fades in as the phone scales up (0 → 1 between 0% and 20% scroll progress)
- Additionally, apply `backdrop-filter: blur(8px)` for extra obscuring

### 4. Scroll Inside Phone

- The phone's chat container (`chatContainerRef`) becomes the scroll target
- A **fake scroll container** wraps the entire phone + blur overlays
- This container captures `onWheel` and `onTouchMove` events
- Scroll events increment/decrement a `fakeScrollProgress` state (0 → 1)
- This drives the same step-based animation as before (typing, messages, Flow UI)

### 5. Demo Sequence (same as current)

| Progress | Event |
|----------|-------|
| 0–8% | Phone entrance (scale up, fade in) |
| 8–12% | Typing dots 1 (bot) |
| 12–25% | Message 1 — Bot greeting with menu |
| 25–30% | Typing dots 2 (customer) |
| 30–42% | Message 2 — Customer reply "1" |
| 42–48% | Typing dots 3 (bot) |
| 48–60% | Flow Step 1 — Service selection |
| 60–65% | Flow transition |
| 65–78% | Flow Step 2 — Time selection |
| 78–85% | Flow submit |
| 85–90% | Flow closing |
| 90–100% | Confirmation message + gold glow |

### 6. Unlock

- When `fakeScrollProgress >= 1`, set `isLocked = false`
- `document.body.style.overflow = ""` restores page scrolling
- Blur overlays fade out
- Phone scales back down slightly and fades into normal page flow
- User can continue scrolling the page normally

---

## Files to Modify

### [`lumenfly-next/components/LeadCatcher.tsx`](lumenfly-next/components/LeadCatcher.tsx)

**Changes needed:**

1. **Add new state variables:**
   - `isLocked: boolean` — whether page scroll is locked
   - `fakeScrollProgress: number` — scroll progress within the locked phone (0–1)
   - `phoneEntered: boolean` — whether phone has entered viewport

2. **Add IntersectionObserver** to detect when phone enters viewport:
   - When `entry.isIntersecting === true` and not already locked, set `isLocked = true`
   - Store the scroll position at lock time (`window.scrollY`)

3. **Scroll lock effect:**
   ```tsx
   useEffect(() => {
     if (isLocked) {
       document.body.style.overflow = "hidden";
       document.body.style.position = "fixed";
       document.body.style.top = `-${scrollYAtLock}px`;
       document.body.style.width = "100%";
     } else {
       document.body.style.overflow = "";
       document.body.style.position = "";
       document.body.style.top = "";
       document.body.style.width = "";
       window.scrollTo(0, scrollYAtLock);
     }
     return () => {
       document.body.style.overflow = "";
       document.body.style.position = "";
       document.body.style.top = "";
       document.body.style.width = "";
     };
   }, [isLocked]);
   ```

4. **Fake scroll handler:**
   ```tsx
   const handleFakeScroll = useCallback((delta: number) => {
     setFakeScrollProgress(prev => {
       const next = prev + delta * 0.002; // sensitivity
       return Math.max(0, Math.min(1, next));
     });
   }, []);
   ```

5. **Wrap section content** in a fixed-position container when locked:
   - When `isLocked`, render a `position: fixed; inset: 0; z-index: 50` container
   - Inside: blur overlays (top + bottom), phone centered
   - Phone uses `fakeScrollProgress` instead of `scrollProgress`

6. **Blur overlays component:**
   ```tsx
   <div className="fixed inset-0 pointer-events-none z-50">
     {/* Top blur */}
     <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#1A1810] to-transparent backdrop-blur-sm" 
       style={{ opacity: blurOpacity }} />
     {/* Bottom blur */}
     <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#1A1810] to-transparent backdrop-blur-sm"
       style={{ opacity: blurOpacity }} />
   </div>
   ```

7. **Unlock condition:**
   - When `fakeScrollProgress >= 1`, set `isLocked = false` after a brief delay (300ms for the confirmation to settle)

8. **Remove `min-h-[200vh]`** from section — no longer needed since scroll is locked

### [`lumenfly-next/app/globals.css`](lumenfly-next/app/globals.css)

**Add scrollbar hiding for locked state:**
```css
body.scroll-locked {
  overflow: hidden !important;
  position: fixed;
  width: 100%;
}
```

---

## Visual Design

```
┌─────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← Top blur (30vh, gradient to transparent)
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │     + backdrop-filter: blur(8px)
│                                     │
│          ┌───────────────┐          │
│          │               │          │
│          │   PHONE       │          │  ← Centered, scale(0.4→1.0)
│          │   (WhatsApp   │          │     Chat/Flow scrolls inside
│          │    Chat UI)   │          │
│          │               │          │
│          └───────────────┘          │
│                                     │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← Bottom blur (30vh, gradient to transparent)
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────┘
```

---

## Edge Cases

| Case | Handling |
|------|----------|
| **Reduced motion** | Skip scroll lock entirely, show full demo immediately |
| **Mobile** | Blur overlays use `h-[25vh]` instead of `30vh` to leave more room |
| **Resize during lock** | Recalculate phone position on resize |
| **Tab away and back** | Check if section is still in viewport, maintain lock state |
| **Very fast scrolling** | Clamp `fakeScrollProgress` to 0–1, use `Math.max(0, Math.min(1, ...))` |
| **Touch devices** | Use `touchmove` event with `preventDefault()` to prevent page scroll |
| **Unlock race condition** | Always restore body overflow in cleanup |

---

## Implementation Steps

1. Add `isLocked`, `fakeScrollProgress`, `scrollYAtLock` state to `LeadCatcher.tsx`
2. Add IntersectionObserver to detect phone entering viewport
3. Implement scroll lock effect (body overflow hidden + fixed positioning)
4. Add fake scroll handler (wheel + touch events)
5. Create blur overlay components
6. Replace `scrollProgress` with `fakeScrollProgress` in the locked state
7. Add unlock logic when `fakeScrollProgress >= 1`
8. Remove `min-h-[200vh]` from section
9. Add `.scroll-locked` CSS class to globals.css
10. Build test
