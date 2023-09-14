import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LangProvider } from './assets/context/langContext';
import { ThemeProvider } from './assets/context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>

  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>
  </ThemeProvider>
);