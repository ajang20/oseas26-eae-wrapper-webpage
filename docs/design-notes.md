# Design notes
 
Fonts, colors (hex) from nagalandgis.in.

## Fonts

- Body: `"Open Sans", sans-serif` (`--font-body`).

## Colors

Use the variables from `template.css`. Never hardcode a hex value in a rule (see `conventions.md`).

| Token                 | Value     | Use                                | Name in raw export |
| --------------------- | --------- | ---------------------------------- | ------------------ |
| `--color-brand`       | `#1c2028` | Header, footer                     | `--black` (brand)  |
| `--color-text`        | `#1c2028` | Body text                          | `--black` (brand)  |
| `--color-text-muted`  | `#5a5f66` | Secondary text                     | not in export      |
| `--color-bg`          | `#f8f8f8` | Page background                    | `--whitesmoke`     |
| `--color-surface`     | `#fff`    | Cards, panels                      | `--white-100`      |
| `--color-surface-alt` | `#f1f1f1` | Table and control-bar header cells | `--whitesmoke-300` |
| `--color-border`      | `#d3d2d8` | Borders, dividers                  | `--lightgray`      |
| `--color-active`      | `#ec0b43` | Active nav item, small highlights  | `--crimson-100`    |
| `--color-action`      | `#2271b1` | Primary buttons                    | `--steelblue-300`  |
| `--color-on-brand`    | `#fff`    | Text on the brand color            | `--white-100`      |

