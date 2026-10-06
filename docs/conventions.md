# Conventions

## Principles

- IDs are for JavaScript only. Classes are for CSS only. JS never styles inline; it toggles `block__element--modifier` classes.
- No inline `style=` or `onclick=` in HTML. Only one `<script>` tag, at the end of `<body>` after the last zone.
- ES2020, no frameworks, no build step, plain functions with a module prefix (`url_build`, `map_update`). No classes.
- Every promise is awaited or has a `.catch`. No `await` inside a loop; use `Promise.all`.

## Naming

- Lowercase, hyphen-separated. IDs: `block-name`. Classes: BEM `block__element--modifier` (enforced by Stylelint).
- Elements never nest in names: `block__bar-button`, not `block__bar__button`.
- A modifier is only used with its base class: `class="block__frame block__frame--loading"`.
- Data attributes: `data-*`, kebab-case (`data-partial`).
- CSS variables: `--category-name` (`--color-brand`, `--font-body`).

## IDs (add a new one here first)

None yet.

## Classes (BEM; add a new one here first)

Everything in the iframe zone uses the `explorer` block: `explorer`, `explorer__element`, `explorer__element--modifier`. Nothing registered yet apart from that prefix.

**Exception:** `.site-header` and `.site-footer` come from the borrowed partials and do not follow the rules above. Leave them as they are and never copy their naming style into our own classes.

## HTML zones

1 header (borrowed) | 2 iframe | 3 footer (borrowed)

### Iframe (zone 2)

- The iframe zone owns the `explorer` block. Its classes all start with `explorer`, and its CSS lives in its own file, `stylesheets/explorer.css`, linked after `template.css`.
- `explorer.css` only styles `explorer` classes. Shared tokens come from `template.css` variables.
- Always give the iframe a descriptive `title`. No `width`, `height`, `style` or `onload` attributes; size it in CSS, listen in JS.
- Its states (loading, error, hidden) are modifiers toggled by JS, never inline styles.
- `src` must not be empty at launch. `npm run check:launch` fails if it is.

### Header and footer slots (zones 1 and 3)

- The page only holds an empty slot: `<div data-partial="partials/site-header.html"></div>`.
- Slots get no class and no ID. `data-partial` is the only hook, and only `partials.js` reads it.
- Classes inside the partials belong to the site. Our code never adds, renames or queries them.

## CSS

- `template.css` holds the shared variables and page-level base styles. Each zone we build gets its own file (the iframe zone: `explorer.css`).
- Mobile first; breakpoints only 48rem and 64rem. Relative units. No `!important`, no hex colors (use `var(--...)`).

## JS responsibilities

main.js wiring only | partials.js dev only
