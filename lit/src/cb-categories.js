import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import CookbookService from 'cookbook-service/service.js';
import sharedStyles from './shared-styles.js';

const service = new CookbookService();

class CBCategories extends LitElement {
  constructor(){
    super();

    this.categories = [];
    this._init();
  }
  async _init(){
    this._categories = await service.categories();
  }
  static get properties(){
    return {
      _categories: Array
    }
  }
  _logMe(log){
    console.log(log);
  }
  render(){
    return html`
      ${sharedStyles}
      <ul>
        ${this._categories && this._categories.map(cat=>html`
          <li>
            <a href="/category/${cat._id}">${cat.name}</a>
          </li>
        `)}
      </ul>
    `
  }
}

window.customElements.define('cb-categories', CBCategories);
