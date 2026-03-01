# React.JS Isomorphic (Universal) Example Application

An isomorphic (universal) React.js example application that renders the same React components on both the server and the client. The server uses Node.js with Express.js and React DOM's `renderToString()` to produce fully-rendered HTML on the initial page load. The client then hydrates that HTML with `hydrateRoot()`, attaching event listeners and making the page interactive — all without a blank-page flash.

## Application Files

### `App.tsx`

The shared React component used by both the server and the client. It renders a simple UI containing an image, an `<h1>` heading, and a `<button>` with an `onClick` handler that triggers a browser alert. Because this single component is imported by both `server.tsx` and `client.tsx`, it is the "isomorphic" (universal) part of the application — the same code runs in both environments.

### `server.tsx`

The Node.js / Express.js server and the application's entry point. It does the following:

1. Creates an Express server and serves static files (the client bundle and stylesheet) from the `dist/` directory.
2. On a `GET` request to `/`, it imports the `<App />` component and renders it to an HTML string using React DOM's `renderToString()`.
3. Sends a complete HTML page back to the browser with the server-rendered markup inside a `<div id="root">`, along with `<script>` and `<link>` tags pointing to the client bundle (`bundle.js`) and stylesheet (`global-styles.css`).
4. Listens on port **3000**.

### `client.tsx`

The client-side entry point that gets bundled into `dist/bundle.js` by ESBuild. When the browser loads this script, it:

1. Finds the existing `<div id="root">` element that already contains the server-rendered HTML.
2. Calls `hydrateRoot()` from React DOM to attach React's event listeners to the pre-existing DOM, making the page fully interactive (e.g., the button's `onClick` handler starts working).

### `global-styles.css`

The application's stylesheet, shared across both server-rendered and client-rendered views. It sets a serif font (Bodoni), a cornsilk background with navy text, centers the layout using flexbox, and styles the image with a blue border, rounded corners, and a box shadow. The button is styled with a navy border, rounded corners, and centered with auto margins.

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed, then install all dependencies:

```bash
npm install
```

This reads the `package.json` and installs all required dependencies, including React, React DOM, Express.js, TypeScript, ESBuild, and their associated type definitions.

## How the Build Works

Running `npm run build` uses [ESBuild](https://esbuild.github.io/) to bundle `client.tsx` (and its imports, including `App.tsx` and React) into a single file at `dist/bundle.js`. It also copies `global-styles.css` into the `dist/` directory. The Express server in `server.tsx` then serves everything in `dist/` as static files, so the browser can load the client bundle and stylesheet.

## Package.json Scripts

### `npm run build`

```
esbuild client.tsx --bundle --outfile=dist/bundle.js --jsx=automatic --jsx-import-source=react && cp global-styles.css dist/global-styles.css
```

Bundles `client.tsx` into `dist/bundle.js` using ESBuild with automatic JSX transformation, and copies `global-styles.css` into the `dist/` folder.

### `npm start`

```
npm run build && tsx server.tsx
```

Runs the build first, then starts the Express server using `tsx` (a TypeScript executor that runs `.tsx` files directly without a separate compile step). The app will be available at **http://localhost:3000/**.

### `npm run dev`

```
npm run build && tsx watch server.tsx
```

Runs the build first, then starts the server in **watch mode** — `tsx watch` automatically restarts the server whenever you save changes to your source files. Use this during development.

### `npm test`

Not yet implemented. Currently outputs an error message and exits.

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000/** in your browser.

## Author

Faddah Wolf

## License

ISC
