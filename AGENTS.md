# Repository Guidelines

## Project Structure & Module Organization

This is a standalone Hugo website for Pro Event Bartenders; no external theme, Node.js, or npm installation is required.

- `content/` declares routes and page layouts. `content/services/_index.md` defines the services directory; individual service routes live alongside it.
- `data/content.yaml` holds shared business copy, navigation, and general page text.
- `data/service_pages.yaml` holds occasion-specific titles, descriptions, highlights, and planning steps.
- `layouts/_default/` contains page templates; `layouts/partials/` contains reusable sections and metadata helpers.
- `static/css/site.css`, `static/js/`, and `static/images/` contain assets.
- `hugo.toml` configures the site. `public/` is generated output and is ignored by Git.

Read `CONTENT-GUIDE.md` before changing content fields.

## Build, Test, and Development Commands

Run from the repository root:

- `hugo server`: start the live-reloading preview at `http://localhost:1313/`.
- `hugo server --disableFastRender`: fully render pages during preview troubleshooting.
- `hugo --minify`: build deployment files into `public/`.
- `hugo --minify --panicOnWarning`: validate the build with warnings treated as failures.

Deploy the generated `public/` directory using the hosting provider's workflow.

## Coding Style & Naming Conventions

Use two-space indentation in YAML and spaces instead of tabs. Preserve existing Go template, CSS, and JavaScript conventions; avoid unrelated reformatting. No formatter or linter is configured.

Use lowercase, hyphenated route names, such as `wine-tasting.md`. A service route's `serviceKey` must match its data entry's `slug`; use `layout: event-service` for the shared detail layout. Keep existing slugs stable. Edit source assets, never generated HTML.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Run the Hugo build after content or template changes. Check affected pages for one main heading, correct metadata, working directory and quote links, and missing content. For visual changes, inspect desktop and mobile layouts. Verify navigation and inquiry behavior when editing JavaScript.

## Commit & Pull Request Guidelines

This checkout has no Git metadata, so historical commit conventions cannot be verified. When version control is available, use concise, imperative messages, such as `Add wine tasting service page`. Keep changes focused. PRs should describe the change, affected routes, validation performed, and relevant issues; include screenshots for layout changes.

## Business Configuration

Preserve the client-supplied alcohol policy and confirm pricing and optional supplies through custom quotes. On Netlify, the inquiry form submits to the `event-inquiry` form. Configure the recipient under Forms > Submission notifications in Netlify. Never commit credentials.
