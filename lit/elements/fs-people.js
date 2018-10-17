import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';
import './fs-person.js';

var startTime;
var lastMeasure;

var startMeasure = function(name) {
  startTime = performance.now();
  lastMeasure = name;
};
var stopMeasure = function() {
  window.setTimeout(function() {
    var stop = performance.now();
    console.log(lastMeasure+" took "+(stop-startTime));
  }, 0);
};

class FSPeople extends LitElement {
  constructor(){
    super();

    let arr = new Array(1000);

    this.people = Array.from(arr).map((a,i)=>{
      return {name: `Tyler ${i}`, gender: 'male'};
    });
  }
  render() {
    startMeasure('render');
    stopMeasure();
    let stuff = html`
      <style>
        :host {
          display: block;
        }
        fs-person {
          margin-top: 10px;
        }
      </style>
       ${repeat(this.people,(person)=>html`
         <fs-person .name="${person.name}" .gender="${person.gender}"></fs-person>
       `)}


    `;
    return stuff;
  }

  static get properties() {
    return {
      people: {
        type: Array
      }
    }
  }

  _doStuff(e){
    e.preventDefault();

    this.name += ' things';
  }
}

window.customElements.define('fs-people', FSPeople);
