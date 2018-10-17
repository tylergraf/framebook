import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import CookbookService from 'cookbook-service/service.js';
import sharedStyles from './shared-styles.js';

// import './cb-header.js';
const service = new CookbookService('http://localhost:3000');

class CBRecipes extends LitElement {
  constructor(){
    super();

    this._recipes = [];
  }
  async _init(id){
    this._recipes = await service.recipes(id);
  }
  set id(val){
    if(!val) return;
    this._init(val);
  }
  static get properties(){
    return {
      _recipes: Array
    }
  }
  render(){
    return html`
      ${sharedStyles}
      <style>

      </style>
      <ul>
        ${this._recipes && this._recipes.map(recipe=>html`
          <li>
            <a href="/recipe/${recipe._id}">${recipe.title}${recipe.subtitle}</a>
          </li>
        `)}
      </ul>
    `
  }
}

window.customElements.define('cb-recipes', CBRecipes);
