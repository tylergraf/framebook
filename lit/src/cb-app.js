import {LitElement, html} from '@polymer/lit-element/lit-element.js';
// import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
// import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';

import './cb-header.js';

class CBApp extends LitElement {
  render(){
    return html`
      <style>
        :host {
          height: 100%;
        }
        main {
          max-width: 800px;
          margin: 0 auto;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          height: calc(100% - 60px);
          padding: 0 40px;
          overflow-y: scroll;
        }
        .page {
          display: none;
        }
        .page[active] {
          display: block;
        }
      </style>
      <cb-header></cb-header>
      <main role="main" class="main-content">
        <cb-categories class="page" ?active="${this._page === 'categories'}"></cb-categories>
        <cb-subcategories class="page" ?active="${this._page === 'category'}" .id="${this._page === 'category' ? this._id : ''}"></cb-subcategories>
        <cb-recipes class="page" ?active="${this._page === 'subcategory'}" .id="${this._page === 'subcategory' ? this._id : ''}"></cb-recipes>
        <cb-recipe class="page" ?active="${this._page === 'recipe'}" .id="${this._page === 'recipe' ? this._id : ''}"></cb-recipe>
        <cb-all-recipes class="page" ?active="${this._page === 'all'}"></cb-all-recipes>
        <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
      </main>
    `
  }
  static get properties(){
    return {
      _page: String,
      _id: String
    }
  }
  _locationChanged() {
    let path = window.decodeURIComponent(window.location.pathname);
    path = path.slice(1).split('/');

    let page = path[0] === '' ? 'categories' : path[0];

    let handler = ()=>{
      this._page = page
      this._id = path[1] || null;
    }
    switch (page) {
      case 'categories':
        import('./cb-categories.js').then(handler)
        break;
      case 'category':
        import('./cb-subcategories.js').then(handler)
        break;
      case 'subcategory':
        import('./cb-recipes.js').then(handler)
        break;
      case 'recipe':
        import('./cb-recipe.js').then(handler)
        break;
      case 'all':
        import('./cb-all-recipes.js').then(handler)
        break;
      default:

    }
  }
  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
    // installOfflineWatcher((offline) => this._offlineChanged(offline));
    // installMediaQueryWatcher(`(min-width: 460px)`,
    //     (matches) => this._layoutChanged(matches));
  }
}

window.customElements.define('cb-app', CBApp);
