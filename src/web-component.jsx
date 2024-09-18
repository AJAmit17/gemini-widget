/* eslint-disable react/no-is-mounted */
import React from 'react';
import ReactDOM from "react-dom/client";
import Chatbot from "./components/Chatbot";

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const apiKey = this.getAttribute('api-key');
    const apiModel = this.getAttribute('api-model');

    const root = ReactDOM.createRoot(this.shadowRoot);
    root.render(React.createElement(Chatbot, { apiKey, apiModel }));
  }
}

export default WidgetWebComponent;
