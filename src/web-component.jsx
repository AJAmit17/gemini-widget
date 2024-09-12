/* eslint-disable react/no-is-mounted */
import ReactDom from "react-dom/client";
import Chatbot from "./components/Chatbot";

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const root = ReactDom.createRoot(this.shadowRoot);
    root.render(<Chatbot />);
  }
}

export default WidgetWebComponent;
