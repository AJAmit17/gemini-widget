import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WidgetWebComponent from "./web-component";

document.querySelector('my-widget').setAttribute('api-key', import.meta.env.VITE_GOOGLE_API_KEY);
document.querySelector('my-widget').setAttribute('api-model', import.meta.env.VITE_GOOGLE_GEMINI_MODEL);

customElements.define("my-widget", WidgetWebComponent);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}