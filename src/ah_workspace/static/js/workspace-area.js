import { LitElement, html, css } from '/chat/static/js/lit-core.min.js';
import { unsafeHTML } from '/chat/static/js/lit-html/directives/unsafe-html.js';

class WorkspaceArea extends LitElement {
  static properties = {
    content: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex: 1;
      background: var(--workspace-bg, var(--background-color, #1e1e1e));
      color: var(--workspace-text, var(--text-color, #e0e0e0));
    }
    .workspace-content {
      flex: 1;
      display: flex;
    }
    iframe {
      flex: 1;
      border: none;
      background: inherit;
      color: inherit;
    }
  `;

  constructor() {
    super();
    this.content = `
      <style>
        body {
          margin: 0;
          padding: 20px;
          background: var(--workspace-bg, var(--background-color, #1e1e1e));
          color: var(--workspace-text, var(--text-color, #e0e0e0));
          font-family: system-ui, -apple-system, sans-serif;
          height: 100%;
          box-sizing: border-box;
        }
        html {
          height: 100%;
        }
        a {
          color: var(--link-color, #58a6ff);
        }
        pre, code {
          background: var(--code-bg, #2d2d2d);
          border-radius: 4px;
          padding: 0.2em 0.4em;
        }
        pre {
          padding: 1em;
          overflow-x: auto;
        }
      </style>
      <div class="welcome">Workspace Area - Content will appear here</div>
    `;
  }

  setContent(content) {
    // Inject default styles if they're not present
    if (!content.includes('<style>')) {
      content = `
        <style>
          body {
            margin: 0;
            padding: 20px;
            background: var(--workspace-bg, var(--background-color, #1e1e1e));
            color: var(--workspace-text, var(--text-color, #e0e0e0));
            font-family: system-ui, -apple-system, sans-serif;
            height: 100%;
            box-sizing: border-box;
          }
          html {
            height: 100%;
          }
          a {
            color: var(--link-color, #58a6ff);
          }
          pre, code {
            background: var(--code-bg, #2d2d2d);
            border-radius: 4px;
            padding: 0.2em 0.4em;
          }
          pre {
            padding: 1em;
            overflow-x: auto;
          }
        </style>
      ` + content;
    }
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
