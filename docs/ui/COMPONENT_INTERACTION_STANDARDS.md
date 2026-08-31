# Component and Interaction Standards

## Navigation

- Use semantic links for section/page navigation.
- Current section/page should be understandable.
- If navigation is sticky, anchor targets need `scroll-margin-top`.
- Keyboard focus must not be obscured by the header.
- Mobile navigation must have an accessible name and predictable close behavior.

## Brand/home link

If `Runodev` is the visible brand/home link:

- keep it if intentional;
- ensure its accessible/contextual relationship to Moses Onerhime is understandable;
- do not rename it automatically.

## Project filters

The current work filters should:

- use real buttons;
- expose selected state (`aria-pressed` or equivalent appropriate semantics);
- support keyboard activation;
- show visible active state;
- preserve focus after filtering;
- avoid large layout jumps;
- work without hover;
- keep categories understandable on mobile.

Do not convert a simple filter into an unnecessarily complex tab system unless tab semantics are genuinely correct.

## Project cards

Define one interaction model.

If the whole card is clickable:

- make the hit area consistent;
- avoid invalid nested links;
- preserve secondary live/source actions;
- provide visible focus;
- make cursor/hover behavior match clickability.

If only specific links are clickable, do not style the whole card as if it were one large link.

## Buttons

Use a small hierarchy:

- primary;
- secondary;
- text/tertiary;
- icon-only only when necessary.

Each button needs appropriate:

- default;
- hover;
- pressed;
- focus-visible;
- disabled;
- loading state.

## Links

Use descriptive accessible names.

Avoid eight indistinguishable accessible links called only `Case study`.

For external links:

- verify destinations;
- use `rel="noopener noreferrer"` where appropriate when opening a new tab;
- do not force new tabs for ordinary internal navigation.

## Contact links

Verify:

- `mailto:`;
- WhatsApp;
- LinkedIn;
- GitHub;
- Telegram;
- TikTok/other social;
- any Discord representation.

Do not rewrite contact values from assumptions.

If text and href disagree, report it.

## Icons

Use one icon language.

- decorative icons: hide from assistive technology;
- icon-only actions: accessible label;
- external-link icons should supplement, not replace, text.

## Focus

Use strong `:focus-visible` states.

Never:

```css
outline: none;
```

without an accessible replacement.

## Motion

Avoid:

```css
transition: all;
```

Prefer explicit:

- opacity;
- transform;
- color;
- border-color;
- background-color.

## Hover

Hover may enrich project cards, but:

- essential content must be visible without hover;
- touch users must not lose information;
- keyboard focus should provide equivalent affordance.

## Modals/lightboxes

If case studies/media use dialogs:

- use proper dialog semantics;
- move focus inside;
- trap focus while modal;
- close with Escape;
- restore focus to opener;
- ensure close button is comfortably sized;
- prevent background scrolling if appropriate.

A dedicated route is often better for substantial case studies.

## Scroll behavior

Do not hijack scrolling.

Smooth scrolling should respect reduced-motion preferences.

Anchor links should update content in a predictable way.

## Loading

Avoid loading screens for a mostly static portfolio.

If project media is loading:

- reserve geometry;
- use useful placeholders;
- do not block text/navigation.

## Tooltips

Do not put essential project information in tooltips.

They are secondary assistance only.
