# Celine Sophie — Portfolio

Netlify-ready source for Celine Sophie von Christierson’s visual portfolio.

## Open locally in VS Code

1. Unzip the folder.
2. Open the `celine-frama-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL shown in the terminal.

## Publish on Netlify

### Recommended: connect with GitHub

1. Create a new GitHub repository and upload this project.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Connect the GitHub repository.
4. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Select **Deploy**.

### Quick manual upload

1. Run `npm install` and `npm run build` in VS Code.
2. Drag the generated `dist` folder into Netlify Drop.

## Important folders

- `index.html` — portfolio structure and text
- `src/style.css` — layout and visual styling
- `src/main.js` — scroll progress and video playback
- `public/media` — images and videos
- `public/legacy` — interactive visual experiments
