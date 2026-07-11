# IDK.github.IO

A clean, responsive starter portfolio for projects and experiments. It uses plain HTML, CSS, and JavaScript, so GitHub Pages can publish it directly without a build step.

## Customize it

- Edit the headline and introduction in `index.html`.
- Replace the three starter project cards with real projects and links.
- Update the About section and GitHub profile link.
- Change the colors near the top of `styles.css`.

## Preview locally

The site can be opened directly by double-clicking `index.html`. For a local web server, run this from the repository folder:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy with GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then select **Save**.
5. Wait for GitHub's Pages deployment to finish. The site will appear at:

   <https://sethedeepic.github.io/IDK.github.IO/>

Future pushes to `main` will update the website automatically.

## Files

```text
index.html   Page structure and content
styles.css   Layout, colors, responsive design, and animation
script.js    Theme toggle, current year, and scroll reveals
.nojekyll    Tells GitHub Pages to serve the static files as-is
```
