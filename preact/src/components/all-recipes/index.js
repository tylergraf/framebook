import { h, Component } from 'preact';
import { Link } from 'preact-router';
import CookbookService from 'cookbook-service/service.js';
import Recipe from '../recipe';
import 'lit/src/cb-recipe.js';
import Fuse from 'fuse.js/dist/fuse.js';

const service = window.CookbookService;

export default class Recipes extends Component {
	constructor(props){
		super(props);

		service.allRecipes()
			.then(recipes=>{
				this.setState({recipes, _allRecipes: recipes })

				let options = {
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
				this.fuse = new Fuse(this.state._allRecipes, options); // "list" is the item array
			});
	}
	_filter(e){
    let value = e.target.value;
    startMeasure("filter");
    if(value){
			this.setState({recipes: this.fuse.search(value)})
    } else {
			this.setState({recipes: [...this.state._allRecipes]})
    }
    stopMeasure();
  }
  _toggleCollapse(e){
    startMeasure("collapse");
		this.setState({collapsed: !this.state.collapsed});
    stopMeasure();
  }

	render(){
		return (
			<div class="all-recipes">
				<style jsx>{`
					.all-recipes ul {
						margin: 0;
						padding: 0;
					}
					.all-recipes li {
						border-bottom: 1px solid #ccc;
						margin-bottom: 20px;
						padding-bottom: 20px;
					}
					.all-recipes header {
						margin: 20px 0;
						display: flex;
						align-items: center;

					}
					.all-recipes .flex {
						flex: 1;
					}
				`}</style>

				<header>
					<div>
						<label for="filter">Filter</label>
						<input id="filter" autofocus type="text" onInput={e => this._filter(e)} />
					</div>
					<div>
						<input id="collapsed" type="checkbox" onChange={e => this._toggleCollapse(e)} />
						<label for="collapsed">Collapsed</label>
					</div>
					<span class="flex"></span>
					<p>Showing {this.state.recipes && this.state.recipes.length} of {this.state._allRecipes && this.state._allRecipes.length}</p>
				</header>
				<ul>
					{this.state.recipes && this.state.recipes.map((recipe) =>
						<li key={recipe._id}>
							<cb-recipe recipe={recipe} collapsed={this.state.collapsed}></cb-recipe>
						</li>
					)}
				</ul>
			</div>
		);
	}
};
