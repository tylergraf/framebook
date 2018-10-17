import {LitElement, html} from '@polymer/lit-element/lit-element.js';

class CBHeader extends LitElement {
  render(){
    return html`
      <style>
        header {
          height: 50px;
          background: linear-gradient(to left, #4b6cb7, #182848); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        h1,a {
          margin: 0 0 0 10px;
          padding: 0;
          color: #fff;
          font-size: 24px;
          text-decoration: none;
        }
        nav {
          margin-right: 10px;
        }
      </style>
      <header>
        <h1><a href="/">Lit Cookbook</a></h1>
        <nav>
          <a href="/all">All Recipes</a>
        </nav>
      </header>
    `
  }
}

window.customElements.define('cb-header', CBHeader);
