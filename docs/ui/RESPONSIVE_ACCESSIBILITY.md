# Responsive and Accessibility Standards

Target: WCAG 2.2 AA.

## Viewports to verify

At minimum:

- 360×800;
- 390×844;
- 430×932;
- 768×1024;
- 1024×768;
- 1280×800;
- 1440×900;
- wide desktop.

Also test intermediate widths where the project grid changes columns.

## Mobile composition

On phones:

- hero should identify Moses quickly;
- stats should not consume excessive vertical space;
- project filters must fit or scroll intentionally;
- project cards must remain legible;
- project tags should wrap cleanly;
- contact controls must be easy to tap;
- decorative media must not push all evidence below multiple screens.

## Text

Support browser zoom and reflow.

Avoid:

- fixed-height text containers;
- clipping;
- tiny metadata;
- low-contrast muted copy;
- headings that overflow at 320–360 px.

## Semantic structure

Use:

- `header`;
- `nav`;
- `main`;
- `section` with headings where meaningful;
- `article` for self-contained project/case-study content where appropriate;
- `footer`;
- lists for lists;
- native buttons and links.

Use ARIA only when native semantics are insufficient.

## Skip link

Provide a skip-to-main-content link.

It may remain visually hidden until keyboard focused.

## Heading hierarchy

Each page should have one clear page-level H1.

Do not choose heading tags based on font size.

Case-study sections should follow a logical outline.

## Keyboard

A keyboard-only visitor must be able to:

- navigate top navigation;
- activate work filters;
- open project details;
- follow live/source links;
- use media controls;
- reach contact actions;
- reach the footer.

## Focus

Focus must be:

- visible;
- high contrast;
- not clipped;
- not hidden behind sticky UI.

## Target size

WCAG 2.2 AA includes a 24×24 CSS px minimum target-size criterion with exceptions.

For primary mobile controls, aim closer to 44×44 CSS px where practical.

## Contrast

Ensure sufficient contrast for:

- body copy;
- muted project metadata;
- tags;
- focus rings;
- navigation;
- status labels;
- contact links.

Do not rely on thin, low-opacity text simply to make the site feel minimal.

## Color-independent meaning

Filters/statuses must have more than color alone to identify selection/state.

## Images

Informative project images need useful alt text.

Avoid alt text like:

- `image`;
- `project image`;
- filename.

Decorative textures/logos repeated next to visible text may use empty alt text where appropriate.

## Video

If creative/game footage is embedded:

- no autoplay with sound;
- keyboard-operable controls;
- captions/transcript for meaningful speech where required;
- poster image;
- reduced-motion-friendly behavior.

## Reduced motion

Under:

```css
@media (prefers-reduced-motion: reduce)
```

remove or reduce:

- large transforms;
- parallax;
- long entrances;
- smooth scrolling;
- decorative loops.

Never remove content.

## External icons/links

Ensure icon-only external/social links have accessible names.

The visual label and accessible name should not conflict.

## Mobile sticky UI

Avoid a header so tall that it consumes a large percentage of a phone viewport.

Sticky elements must not hide focused controls or anchor targets.
