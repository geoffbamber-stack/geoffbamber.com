# geoffbamber.com — project context

Personal umbrella website for Geoff Bamber. Acts as a shop window for advisory and
non-executive work, hosts his writing, and generates leads. Hosted at geoffbamber.com.

Geoff edits this himself using VS Code + Claude Code. Keep changes clean, accessible,
and responsive. Prefer describing-then-editing over large rewrites.

## Current state

- Multi-page static site. No build step, no dependencies — just open in a browser.
- CSS lives in a single shared `styles.css` linked by every page (was previously inline in
  `index.html`; extracted when the site went multi-page). Edit a token once, all pages update.
- Files:
  - `index.html` — homepage
  - `writing.html` — writing index (tile layout)
  - `articles/*.html` — one page per article (link `../styles.css`, nav points back with `../`)
  - `styles.css`, `geoff_bamber_headshot.png`
- Article bodies are scaffolded with a dashed `.placeholder` box + a `.prose` container.
  Real article text is NOT yet written — do not invent it under Geoff's name.

## Page structure — homepage (in order)

1. Sticky nav — Work / Advisory / Track record / Writing (→ writing.html) / Contact
2. Hero (navy) — positioning statement, two CTAs, framed B&W portrait
3. "What I do" (parchment) — three strands: Advisory, Governance, Value creation
4. Advisory clients (white) — Athx Games, Gelateria Danieli, London Gynaecology, Clava
5. Track record (navy) — ledger of roles
6. Writing (white) — three cards linking to `articles/*.html` + "View all writing" → writing.html
7. About (parchment) — bio + credentials list
8. Contact (navy) — email + social links, footer

## Brand / design tokens (defined as CSS variables in :root)

- `--navy` #0F2038 (Oxford Navy, primary dark)
- `--gold` #C39A3E (Aged Gold, accent) / `--gold-soft` #D8B968
- `--parchment` #F4EFE4 / `--warm-white` #FBF9F4
- `--ink` #1E2A3A body / `--muted` #5C6B7D secondary
- Type: Georgia (serif) for all display + body; system sans stack for eyebrows/labels
  (uppercase, letter-spaced). Keep this pairing.
- Signature device: the gold hairline (hero underline + strand top-borders + ledger hover).
- Respects `prefers-reduced-motion`. Keep the responsive breakpoint at 820px working.

## ACCURACY — these facts are locked, do not reintroduce errors

- Geoff did **NOT** found London Gynaecology. He was the **first CEO appointed after
  private-equity investment**. Never label him founder there.
- Digme Fitness: he was **CEO** (not founder).
- No unverified exit details (an earlier "Phoenix Equity Partners" line was removed).
- "Verus" has been removed entirely — do not reintroduce it.
- Any biographical claim not confirmed by Geoff should be flagged, not invented.

## Open to-dos / needs Geoff's input

- [ ] About paragraph still says "as a founder" — confirm a genuinely founded business to
      anchor it, or drop that phrase.
- [ ] London Gynaecology appears in BOTH Advisory clients and Track record (as CEO). Decide:
      keep in both, or show in one only.
- [ ] Writing: pages/tiles are built, but the three article titles are still placeholders and
      the article bodies are empty `.placeholder` scaffolds — replace with real pieces.
- [ ] Contact email is a placeholder `hello@geoffbamber.com` — set the real address.
- [ ] LinkedIn / social links are stubbed (`href="#"`) — add real URLs.
- [ ] Confirm exact credential names (HBS "AI Certification", Stanford GSB "Executive Education").
- [ ] Advisory sector tags (Gaming & interactive / Food & beverage / Private healthcare) —
      confirm or remove.

## Likely next steps

- Build inner pages reusing the same tokens: fuller About, an Advisory detail page, a Writing
  index that can hold real articles.
- Wire real links (LinkedIn, email).
- Deploy to geoffbamber.com (registrar TBD — needed before pointing the domain at a host).
