import App from './app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/styles.scss';

const container = document.getElementById('root') as HTMLElement;
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}