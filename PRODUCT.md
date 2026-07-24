# Product

## Register

brand

## Users

**Primary: Bérengère Thetiot**, hiring manager for the Acquisition Account Manager, Mid-Market (Southern Europe) role at Reddit, Amsterdam. She rejected Thomas Germain in March 2026 for a different role (Acquisition Client Partner), with the feedback that he lacked C-suite selling experience. She ends every 1:1 with her team by asking "do you have any feedback for me?". She will open this link on a laptop, between meetings, with low patience for anything that smells like a portfolio.

**Secondary: Máni Gudmundsson**, recruiter, and the wider FRITES team (France / Italy / Spain, Amsterdam-based). They read Reddit all day. They will notice immediately if the UI is a bad imitation, and they will notice if a product figure is wrong.

**Context of use:** a single link, arriving cold, probably via application or LinkedIn. No onboarding, no explanation. The page has about four seconds to land the concept before it gets closed.

**Job to be done:** decide whether Thomas is worth an interview, and specifically whether he is a different candidate than the one rejected in March.

## Product Purpose

A single-page pitch disguised as a subreddit (`r/FRITES`). It exists to do three things a cover letter cannot:

1. **Demonstrate rather than claim platform fluency.** The site is built the way a good Reddit ad is built: native to the medium, not broadcast into it. If it reads as corporate, it disproves its own argument.
2. **Show what he did with the rejection.** The March feedback is stated plainly, in the open, as a post. Not spun as a growth story.
3. **Separate sourced fact from reconstruction, visibly.** Every Reddit figure is attributed or explicitly flagged as unverified. This is the credibility play and it is aligned with Reddit's own "Default Open" value.

Success is a recruiter thinking, in order: "oh, it's a subreddit" → "he knows FRITES" → "he cites our real numbers and admits when he doesn't know" → "he was rejected in March and made this" → an interview.

## Brand Personality

**Three words: candid, specific, unshowy.**

First person throughout. Conversational, the register of a Reddit post someone spent real time writing, not a deck and not a LinkedIn humblebrag. Comfortable with self-deprecation. Comfortable saying "I don't know" and "this is reconstructed". Zero superlatives, zero marketing verbs, zero exclamation marks outside the deliberately-bad mock ad.

The voice should sound like a person who has been told no, thought about it honestly, and come back with work instead of an argument.

## Anti-references

- **Portfolio templates.** Hero with a big name, three skill cards, a timeline, a contact form. Instantly fatal here.
- **Corporate ad-agency deck.** Gradients, "results-driven", stat tiles, stock photography of people pointing at whiteboards.
- **A parody of Reddit.** The joke is not "haha it looks like Reddit". The UI is sincere; the content carries the substance. If the imitation is sloppy or winking, the insider signal inverts into a liability.
- **Overclaiming.** Any unattributed number, any "revolutionary", any case study presented as audited fact when it is a vendor-reported figure.
- **Em dashes.** Not in any user-visible copy.
- **A feedback form.** Explicitly cut. Reddit has comment boxes, not forms; a form at the emotional climax breaks the metaphor at the exact moment it matters most, and it asks a hiring manager to do unpaid work. Replaced by a real Reddit comment composer that redirects to email.

## Design Principles

1. **The medium is the argument.** Fidelity to current Reddit UI is not decoration, it is the primary evidence. Every component should survive being compared side by side with a real subreddit by someone who uses Reddit daily.
2. **Sincere imitation, honest content.** The chrome is a faithful copy. The words inside it are entirely Thomas's own and never pretend to be Reddit's.
3. **Sourced or flagged, never asserted.** Every figure is either attributed to a public source or visibly marked as reconstructed or unverified. Honesty is a visible design element, not a disclaimer in the footer.
4. **Interaction is the thesis.** Working upvotes and downvotes exist because the site's argument is that Reddit is the only ad platform where the audience votes on your creative in public. The reader should use the mechanic before they read the paragraph explaining it.
5. **Never broadcast.** The site follows the same rule it gives advertisers. No shouting, no animation that draws attention to itself, nothing that would fail rule 3 in the sidebar.

## Accessibility & Inclusion

- **WCAG 2.2 AA.** Body text ≥4.5:1, UI components ≥3:1. Reddit's canonical `#FF4500` fails 4.5:1 on white, so it is used for fills only; orange text uses `#D93A00` (4.61:1). Brief-specified `#7C7C7C` meta text (4.18:1) and `#0079D3` link blue (4.49:1) both fail and are replaced by Reddit's own accessible tokens `#5C6C74` (5.44:1) and `#0069C2` (5.52:1).
- **Vote state is never color-only.** Upvoted and downvoted states carry `aria-pressed`, an accessible label, and a filled-icon shape change, so the state survives color blindness and greyscale.
- **Full keyboard operation.** Votes, post expansion, and the comment composer are real buttons in tab order with visible focus rings. Post expansion uses `aria-expanded` and controls a labelled region.
- **`prefers-reduced-motion`** collapses all transitions to instant. Content is never gated behind a scroll-triggered reveal, so it renders in full with JavaScript disabled or in a headless crawler.
- **Light theme only**, by decision. The page declares `color-scheme: light` so browser dark-mode auto-inversion cannot mangle it.
