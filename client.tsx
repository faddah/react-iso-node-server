import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const entryPoint = document.getElementById('root')!;

// We find the 'root' div that already has HTML inside it
if (entryPoint) hydrateRoot(entryPoint, <App />);