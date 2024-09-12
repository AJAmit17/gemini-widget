import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import WidgetWebComponent from "./web-component";

// Define the web component
customElements.define("my-widget", WidgetWebComponent);

// Render the React app if there's a root element
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}