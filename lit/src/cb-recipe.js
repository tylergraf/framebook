import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import sharedStyles from './shared-styles.js';

import CookbookService from 'cookbook-service/service.js';

const service = new CookbookService();

class CBRecipe extends LitElement {
  constructor(){
    super();
    this._emptyRecipe = {
      title: '',
      subtitle: '',
      md_directions: '',
      md_ingredients: ''
    };
    this.recipe = {};
  }
  async _init(id){
    this.recipe = Object.assign({}, this._emptyRecipe, await service.recipe(id));
    updateMetadata({
      title: `${this.recipe.title}${this.recipe.subtitle ? ` - ${this.recipe.subtitle}` : ''} | Lit Cookbook`,
      description: 'Lit Cookbook PWA',
      url: window.location.href
    });
  }
  set id(val){
    if(!val) return;
    this._init(val);
  }
  static get properties(){
    return {
      recipe: Object,
      collapsed: Boolean
    }
  }
  render(){
    return html`
      ${sharedStyles}
      <style>
        :host {
          padding: 20px 0;
        }
        h2 {
          margin: 0;
        }
      </style>
      <h2>${unsafeHTML(this.recipe.title)}</h2>
      ${this.recipe.subtitle ? html`
        <h3>${unsafeHTML(this.recipe.subtitle)}</h3>
      ` :
      ''}
      ${!this.collapsed ? html`
        ${this.recipe.ingredients ? html`
          <h4>Ingredients</h4>
          <p>${unsafeHTML(this.recipe.ingredients)}</p>
        ` :
        ''}
        ${this.recipe.directions ? html`
          <h4>Directions</h4>
          <p>${unsafeHTML(this.recipe.directions)}</p>
        ` :
        ''}
      ` : ''}
    `
  }
}

window.customElements.define('cb-recipe', CBRecipe);
