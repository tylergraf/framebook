import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js'

class FSPerson extends LitElement {
  // createRenderRoot(){
  //   return this;
  // }
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        .gender {
          display: inline-block;
          height: 10px;
          width: 10px;
          background: #000;
        }
        .male {
          background: blue;
        }
        .female {
          background: pink;
        }
      </style>
      <input type="checkbox" ?checked=${this.gender === 'male'}>
      <span class="gender ${this.gender}"></span>
      <span id="name">${this.name}</span>
      <cb-categories></cb-categories>
    `;
  }

  static get properties() {
    return {
      name: {
        type: String
      },
      gender: {
        type: String,
        value: 'male'
      }
    }
  }

  _doStuff(e){
    e.preventDefault();

    this.name += ' things';
  }
}

window.customElements.define('fs-person', FSPerson);
