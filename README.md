# Pro Event Bartenders

A complete, standalone Hugo website. No separate theme, theme download, Git submodule, Node.js, or npm installation is required.

## Preview

Install Hugo, then run from this directory:

```sh
hugo server
```

Open http://localhost:1313/. Hugo watches the source files and refreshes after changes.

## Build and deploy

Set `baseURL` in `hugo.toml` to your domain and `site.booking_email` in `data/content.yaml` to your booking address. Then run:

```sh
hugo --minify
```

Deploy the contents of `public/` to any static website host. For hosts with build settings, use `hugo --minify` as the build command and `public` as the publish directory. No theme setting is needed.

## Included pages

- `/`: full homepage
- `/mobile-bar/`: mobile bar experience
- `/services/`: bartending services
- `/brand-activations/`: promotional staffing
- `/wine-tastings/`: wine experiences
- `/about/`: company introduction
- `/packages/`: event options
- `/contact/`: booking inquiry
- `/404.html`: custom error page

Hugo also generates `sitemap.xml` and `robots.txt`.

## Edit the site

Edit **`data/content.yaml`** for business copy, navigation labels, page titles, descriptions, service area, and booking email. Fields have descriptive names and are grouped by website section. See `CONTENT-GUIDE.md` for examples.

`hugo.toml` contains technical settings and your production domain. Files under `content/` only declare the built-in routes. Templates are in `layouts/`; styling, scripts, and images are in `static/`. No Markdown editing is needed for normal content updates.

The inquiry form prepares a draft in the visitor's email app; it does not submit to a backend. When no booking email is configured, it attempts to copy the inquiry and clearly explains that delivery is unavailable. The client supplies alcohol, as described in the existing business copy.

The services directory also includes 12 occasion pages: bachelorette parties, bridal showers, bachelor parties, yacht and boat parties, pool parties, brunch and mimosa bars, birthdays, graduations, holidays, weddings, corporate events, and brand activations. Edit their text in `data/service_pages.yaml`.
