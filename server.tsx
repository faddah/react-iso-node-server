import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const server = express();

// Serve the client bundle and other static files from dist/
server.use(express.static('dist'));

server.get('/', (req, res): void => {
    const html = renderToString(<App />);
    
    res.send(`
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/global-styles.css">
            <title>Isomorphic React.JS App Example</title></head>
        <body>
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `);
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');