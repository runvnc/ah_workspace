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
  `;

  constructor() {
    super();
    this.content = '<div class="welcome">Workspace Area - Content will appear here</div>';
  }

  setContent(content) {
    console.log("Setting content", content);
    this.content = content;
  }

  render() {
    // if this.content is not a string, skip
    if (typeof this.content !== 'string') {
      return html`<div class="welcome">Workspace Area - Content will appear here</div>`
    }
    return unsafeHTML`
      <iframe class="workspace-content" srcdoc="${this.content}"></iframe>
    `;
  }
}

customElements.define('workspace-area', WorkspaceArea);
