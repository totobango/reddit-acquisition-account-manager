# r/FRITES

A pitch for the **Acquisition Account Manager, Mid-Market** role at Reddit in Amsterdam, built as a subreddit instead of a cover letter.

Live: deploy to Vercel, no configuration needed.

## Why it looks like this

The site argues that advertising on Reddit only works when it is native to Reddit. A pitch that made that argument in a portfolio template would disprove itself, so the whole page is a reproduction of the current Reddit UI (the 2023 redesign, not the 2018 one): Reddit Sans, near-white surfaces, 16px cards, the horizontal vote pill.

The votes work. That is not decoration. The argument in post 3 is that Reddit is the only platform where the audience votes on your creative in public, so the reader gets to do it before they read the paragraph explaining it.

## The sourcing system

Rule 5 of the sub is "show the work", so every figure on the page carries one of four inline chips:

| Chip | Meaning |
|---|---|
| `source` | Public, linked, checked against the original |
| `reconstructed` | An inference from the job description or industry practice, not a Reddit fact |
| `could not verify` | Looked for it, could not confirm it, said so instead of asserting it |
| `corrected` | An earlier draft of this page had it wrong |

Four claims from the original brief did not survive checking and are shown as corrections rather than quietly fixed:

- **Europe ARPU of $1.17** does not exist. Reddit reports Global $5.23, US $9.63, International $2.02 (Q1 2026 shareholder letter).
- **"Seventh consecutive quarter above 60% ad revenue growth"** is total revenue, not advertising revenue. Total grew 69%, advertising grew 74%.
- **"Open box reporting"** is not Reddit's phrase. Reddit says "opening the black box".
- **Škoda's "Redditor Edition"** is actually "The Redditor Edit", and the 84% sentiment figure traces to a single uncited aggregator that contradicts The Drum, so it was dropped.

Three more claims are flagged as unverifiable because `business.reddithelp.com` renders client-side and the ads API was unreachable: the ad account currency lock, the Conversions API field names, and whether "add to the conversation" is Reddit's own official wording.

## Design decisions worth knowing

- **Contrast.** Reddit's `#FF4500` is only 3.44:1 against white, so it is used for fills without text (the Snoo, the sub icon). Anything carrying a white label uses Reddit's own darker light-mode orange `#D93A00` (4.61:1). The brief's `#7C7C7C` meta text (4.18:1) and `#0079D3` link blue (4.49:1) both fail AA and were replaced with `#5C6C74` and `#0069C2`. Zero contrast failures across 479 measured elements.
- **Collapsed posts keep their content in the DOM.** Collapse is `max-height` plus `overflow: hidden`, never conditional rendering, so link unfurlers, crawlers and no-JS visitors get the full text. `@media (scripting: none)` expands everything.
- **Vote state is not colour-only.** Each arrow carries `aria-pressed`, an accessible label containing the live score, and a filled-icon shape change.
- **No feedback form.** Reddit has comment boxes, not forms. The page ends in a real Reddit composer that expands to an email address, and Bérengère's question sits in the AMA post where it belongs.

## Stack

Next.js 16 (App Router), React 19, TypeScript, CSS Modules. No Tailwind, no UI library, no images. Fully static.

```bash
npm install
npm run dev
```

`npm run build` type-checks and prerenders. Pin TypeScript to 5.x: the 7.x native preview compiler breaks Next's typecheck worker.

## Not affiliated with Reddit

An independent pitch by a job applicant. Not affiliated with, endorsed by, or published by Reddit, Inc. r/FRITES is not a real subreddit, though it is the real internal name of the France, Italy and Spain team, which is how it appears in Reddit's own job postings. The Snoo in the header is a simplified original drawing, not Reddit's trademarked asset.
