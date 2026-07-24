# Design

## Theme

A faithful reproduction of **current Reddit (2023–2026, the "shreddit" UI)** in light mode. Not the 2018 redesign, and not a stylised homage: the target is that a Reddit employee comparing this page against a real subreddit in the next tab finds nothing structurally wrong.

Fidelity is the design strategy. Every deviation from Reddit's real UI is either an accessibility fix (documented below) or content that could not exist on Reddit.

**Color strategy: Restrained.** Near-white surfaces, one saturated accent (`#FF4500`) used sparingly on the Join button, active vote states, and flair. This is not a timid choice: it is Reddit's own strategy, and drenching the page in orange would break the imitation.

## Color

Light theme only. `color-scheme: light` is declared so browsers do not auto-invert.

### Surfaces
| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page and card background |
| `--bg-sunken` | `#F6F8F9` | Search field, action pills, sidebar wells, code blocks |
| `--bg-hover` | `#F2F4F5` | Post card and button hover |
| `--border` | `#E2E7E9` | Card edges, dividers, sidebar rules |
| `--border-strong` | `#D2D8DB` | Composer outline, table rules |

### Content
| Token | Value | Contrast on `--bg` | Use |
|---|---|---|---|
| `--ink` | `#0F1A1C` | 17.4:1 | Post titles, body copy |
| `--ink-weak` | `#5C6C74` | 5.44:1 | Meta lines, timestamps, counts |

`--ink-weak` replaces the brief's `#7C7C7C`, which measures 4.18:1 and fails WCAG AA for body text. `#5C6C74` is Reddit's own `neutral-content-weak` token.

### Brand
| Token | Value | Use | Note |
|---|---|---|---|
| `--orange` | `#FF4500` | Fills only: Join button, upvoted pill, logo | 3.45:1 on white. Never used for text on a light surface. |
| `--orange-text` | `#D93A00` | Orange text and icons on light surfaces | 4.61:1 ✅ Reddit's own accessible orange |
| `--periwinkle` | `#6A5CFF` | Downvoted pill fill and icon | 4.58:1 ✅ passes as both fill and text |
| `--blue-text` | `#0069C2` | Links | 5.52:1 ✅ |
| `--blue` | `#0079D3` | Badge fills only | 4.49:1, fails as text by a hair |

### Flair palette
Each flair is a tinted chip, not a saturated block: a light background at ~12% of the hue with the text in a darkened version of it, so every flair clears 4.5:1. Playbook and Data blue, Feedback and OC and AMA orange, Guide and Tool green, Test & Learn periwinkle, Discussion blue-grey, Case Study red.

## Typography

**Reddit Sans** (variable, 200–900, Google Fonts) with **Reddit Mono** for numerics in tables and code. These are Reddit's own commissioned typefaces, released 2023 and used across the current product. Fallback stack ends in IBM Plex Sans, which Reddit used from the 2018 redesign until 2023.

This overrides the brief's IBM Plex Sans specification: Reddit Sans is strictly more authentic and it is what the current UI actually renders.

| Role | Size | Weight | Notes |
|---|---|---|---|
| Sub name (banner) | `clamp(1.5rem, 4vw, 2rem)` | 700 | |
| Post title | `1.25rem` / `1.125rem` mobile | 600 | `text-wrap: balance`, `-0.01em` |
| Body | `0.875rem` | 400 | `line-height: 1.5`, `text-wrap: pretty`, max 70ch |
| Meta | `0.75rem` | 400–600 | `--ink-weak` |
| Flair / pill labels | `0.6875rem` | 600 | |
| Vote score | `0.75rem` | 700 | `font-variant-numeric: tabular-nums` |

Tabular numerals on every vote score so the pill does not reflow by a pixel when the count changes.

## Layout

- Content column `1248px` max, split `1fr / 316px` at ≥1120px. Sidebar drops below the feed on narrow viewports.
- Header sticky at `56px`, `z-index: 50`.
- Post cards: `16px` radius, `8px` internal padding on hover surface, separated by `1px` dividers rather than gaps, which is what current Reddit does.
- Action pills: `32px` tall, fully rounded, `--bg-sunken`.
- Vote pill horizontal at the bottom-left of each post, per current Reddit. Not the 2018 left-hand column.
- Semantic z-scale: `--z-header: 50`, `--z-sticky-sidebar: 40`, `--z-tooltip: 70`.

## Motion

Deliberately minimal. Reddit's UI barely animates and rule 3 of the subreddit forbids anything showy.

- Vote pill: `120ms` background and color, plus a `160ms` icon nudge on activation.
- Post expand: height transition on a grid-rows trick, `200ms ease-out-quart`, never gating content visibility.
- Hover states: `100ms`.
- No scroll-triggered reveals anywhere. All content renders on first paint with JS disabled.
- `prefers-reduced-motion: reduce` sets every duration to `1ms`.

## Components

- **Header** — Snoo mark in SVG, wordmark, decorative search pill ("Search r/FRITES"), Get app / Log In buttons, avatar `u/thomasgermain`.
- **Banner** — short gradient band, overlapping circular sub icon, `r/FRITES` title, orange Join button that scrolls to the AMA post.
- **PostCard** — meta line, flair, title, collapsible body, action row. Collapsed by default to a two-line clamp except the pinned post.
- **VotePill** — three-part control, `aria-pressed` on each arrow, filled-icon shape change so state is not color-only.
- **MockAd** — two "Promoted" cards inside post 3, styled as real promoted posts, with simulated comment threads.
- **CommentComposer** — the replacement for the cut feedback form. Renders as Reddit's real composer (avatar, outlined box, "What are your thoughts?", disabled grey Comment button). Clicking expands it to reveal the email and LinkedIn links instead of an input. No fields, nothing submitted.
- **Sidebar** — About, member counts, Created, Rules (ordered list), Moderators, Changelog, Related communities.

## Accessibility

WCAG 2.2 AA. Every contrast pair listed above is measured, not estimated. Focus rings are `2px` `--blue-text` at `2px` offset, never removed. Vote and expand controls are real `<button>`s with accessible names that state the current count and state.
