import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('REACT_ROOT') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
