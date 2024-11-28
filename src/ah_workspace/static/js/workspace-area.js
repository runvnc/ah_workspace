import { LitElement, html, css } from '/chat/static/js/lit-core.min.js';
import { unsafeHTML } from '/chat/static/js/lit-html/directives/unsafe-html.js';

class WorkspaceArea extends LitElement {
  static properties = {
    content: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      height: 100%;
      background: var(--workspace-bg, #ffffff);
      color: var(--workspace-text, #000000);
      padding: 20px;
      box-sizing: border-box;
    }
    .workspace-content {
      height: 100%;
      overflow-y: auto;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;

  constructor() {
    super();
    this.content = '<div class="welcome">Workspace Area - Content will appear here</div>';
  }

  setContent(content) {
    this.content = content;
  }

  render() {
    return html`
      <div class="workspace-content">
        <iframe 
          srcdoc=${this.content}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('workspace-area', WorkspaceArea);
