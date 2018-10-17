import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import {repeat} from 'lit-html/directives/repeat.js';
import sharedStyles from './shared-styles.js';
import CookbookService from 'cookbook-service/service.js';
import './cb-recipe.js';
import 'fuse.js/dist/fuse.js';

const service = new CookbookService('http://localhost:3000');

class CBAllRecipes extends LitElement {
  constructor(){
    super();

    this._allRecipes = [];
    this._recipes = [];
    this._collapsed = false;
    this._init();
  }
  async _init(id){
    this._recipes = await service.allRecipes();
    this._allRecipes = [...this._recipes];
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "subtitle",
        "ingredients",
        "directions",
    ]
    };
    this.fuse = new window.Fuse(this._allRecipes, options); // "list" is the item array
  }
  set id(val){
    if(!val) return;
    this._init(val);
  }
  static get properties(){
    return {
      _recipes: Array,
      _collapsed: Boolean
    }
  }
  _filter(e){
    let value = e.target.value;
    startMeasure("filter");
    if(value){
      this._recipes = this.fuse.search(value);
    } else {
      this._recipes = [...this._allRecipes];
    }
    stopMeasure();
  }
  _toggleCollapse(){
    startMeasure("collapse");
    this._collapsed = !this._collapsed;
    stopMeasure();
  }
  render(){
    return html`
      ${sharedStyles}
      <style>
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          border-bottom: 1px solid #ccc;
          margin-bottom: 20px;
          padding-bottom: 20px;
        }
        header {
          margin: 20px 0;
          display: flex;
          align-items: center;

        }
        input[type="checkbox"]{
          margin-left: 10px;
        }
        .flex {
          flex: 1;
        }
      </style>
      <header>
        <div>
          <label for="filter">Filter</label>
          <input id="filter" autofocus type="text" @input="${this._filter}">
        </div>
        <div>
          <input id="collapsed" type="checkbox" @change="${this._toggleCollapse}">
          <label for="collapsed">Collapsed</label>
        </div>
        <span class="flex"></span>
        <p>Showing ${this._recipes.length} of ${this._allRecipes.length}</p>
      </header>
      <ul>
        ${this._recipes && repeat(this._recipes, ({_id})=>_id, recipe=>html`
          <li>
            <cb-recipe .recipe="${recipe}" .collapsed="${this._collapsed}"></cb-recipe>
          </li>
        `)}
      </ul>
    `
  }
}

window.customElements.define('cb-all-recipes', CBAllRecipes);
