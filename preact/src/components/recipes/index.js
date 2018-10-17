import { h, Component } from 'preact';
import { Link } from 'preact-router';
import CookbookService from 'cookbook-service/service.js';
import style from './style.less';

const service = window.CookbookService;

export default class Recipes extends Component {
	constructor(props){
		super(props);

		service.recipes(props.id)
			.then(recipes=>{
				this.setState({recipes})
			});
	}

	render(){
		return (
			<div class={style.home}>
				<ul>
					{this.state.recipes && this.state.recipes.map((recipe) =>
						<li><Link href={`/recipe/${recipe._id}`}>{recipe.title}{recipe.subtitle}</Link></li>
					)}
				</ul>
			</div>
		);
	}
};
