# Projects page

A small, dependency-free portfolio skeleton designed for GitHub Pages.

## Preview locally

Run a basic web server from the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Customize

- Each `<section class="link-set">` in `index.html` is one collection.
- Duplicate or remove those sections to change the number of collections; the
  navigation dots are generated automatically.
- Each list item contains a clickable title and short description.
- Replace `projects.example.com` with your domain as a local fallback. On the
  published site, the displayed name is automatically read from the URL.
- Update the restrained color palette near the top of `styles.css`.

## Deploy

Push the `main` branch to GitHub, then configure GitHub Pages to deploy from the
repository root. See GitHub's Pages settings for custom-domain and HTTPS options.
