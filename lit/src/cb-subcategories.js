import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import sharedStyles from './shared-styles.js';
import CookbookService from 'cookbook-service/service.js';

// import './cb-header.js';
const service = new CookbookService();

class CBSubcategories extends LitElement {
  constructor(){
    super();

    this._subcategories = [];
  }
  async _init(id){
    this._subcategories = await service.subcategories(id);
  }
  set id(val){
    if(!val) return;
    this._init(val);
  }
  static get properties(){
    return {
      _subcategories: Array
    }
  }
  render(){
    return html`
      ${sharedStyles}
      <style>

      </style>
      <ul>
        ${this._subcategories && this._subcategories.map(subcat=>html`
          <li>
            <a href="/subcategory/${subcat._id}">${subcat.name}</a>
          </li>
        `)}
      </ul>
    `
  }
}

window.customElements.define('cb-subcategories', CBSubcategories);
