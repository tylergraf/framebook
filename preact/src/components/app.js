import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Categories from './categories';
import Subcategories from './subcategories';
import Recipes from './recipes';
import Recipe from './recipe';
import AllRecipes from './all-recipes';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<style jsx>{`
					html,
		      body {
		        margin: 0;
		        height: 100%;
		        font-family: 'Avenir', Helvetica, Arial, sans-serif;
		        -webkit-font-smoothing: antialiased;
		        -moz-osx-font-smoothing: grayscale;
		        color: #2c3e50;
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
				`}</style>
				<Header />
				<main>
					<Router onChange={this.handleRoute}>
						<Categories path="/" />
						<Subcategories path="/category/:id" />
						<Recipes path="/subcategory/:id" />
						<Recipe path="/recipe/:id" />
						<AllRecipes path="/all" />
					</Router>
				</main>
			</div>
		);
	}
}
