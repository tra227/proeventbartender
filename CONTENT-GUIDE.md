# Editing website content

Edit **`data/content.yaml`** for the site’s business text. You do not need to edit Markdown files.

The file is grouped into named sections:

- `site`: business name, description, service area, booking email.
- `pages`: page titles and search descriptions.
- `header` and `footer`: navigation and footer text.
- `home`, `mobile-bar`, `services`, `activations`, `wine`, `about`, `packages`, `banner`, `contact`: the corresponding website sections.
- `shared`: labels used across standalone pages.

Example:

```yaml
site:
  title: "Pro Event Bartenders"
  booking_email: "bookings@your-domain.com"
home:
  headline: "Elevate Your Event."
  headline_accent: "Perfect Every Pour."
```

Change the text inside quotes; preserve the field names and indentation. Use spaces, not tabs. Escape a double quote inside text with a backslash, or use single quotes around the entire value instead. Do not paste the abbreviated example over the full file.

Save while `hugo server` is running to rebuild the preview. All homepage and service-page text comes from the same YAML sections, so each change applies wherever that section appears.

On Netlify, the inquiry form submits to the `event-inquiry` form. Configure the recipient under Forms > Submission notifications in Netlify.

`hugo.toml` contains technical build settings and the production `baseURL`. The small files under `content/` declare Hugo routes; leave them alone for ordinary copy changes. Layouts, styles, images, and JavaScript remain in their respective project folders.

Preview: `hugo server`. Production build: `hugo --minify`.

## Individual service pages

Edit `data/service_pages.yaml` for the 12 occasion-specific pages under `/services/`. Each entry contains its page title, search description, tagline, introduction, directory summary, service highlights, booking button label and planning steps. Keep each `slug` unchanged to preserve existing links. Their small route files live in `content/services/`, and `layouts/_default/event-service.html` renders the shared page layout. The services directory and homepage link to these entries automatically.

The content was adapted from the local Mixmaster Gig project for Pro Event Bartenders' South Florida service area. Source pricing was replaced with custom quotes. Alcohol is supplied by the client; equipment, supplies and optional features are confirmed in the proposal.
