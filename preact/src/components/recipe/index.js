import { h, Component } from 'preact';
import { Link } from 'preact-router';
import CookbookService from 'cookbook-service/service.js';
import style from './style.less';
import html  from 'preact-html';

const service = window.CookbookService;

export default class Recipe extends Component {
	constructor(props){
		super(props);
		if(props.recipe){
			this.setState(props)
		}
		if(props.id){
			service.recipe(props.id)
				.then(recipe=>{
					this.setState({recipe})
				});
			}
	}
	componentWillReceiveProps(props){
		this.setState(props)
	}
	render(){
		let subtitle = this.state.recipe && this.state.recipe.subtitle ? <h3>{html(this.state.recipe.subtitle)}</h3> : '';
		let ingredients = !this.state.collapsed && this.state.recipe && this.state.recipe.ingredients ? <div><h4>Ingredients</h4><p>{html(this.state.recipe.ingredients)}</p></div> : '';
		let directions = !this.state.collapsed && this.state.recipe && this.state.recipe.directions ? <div><h4>Directions</h4><p>{html(this.state.recipe.directions)}</p></div> : '';

		return (
			<div class={style.home}>
				<style jsx>{`
					h2 {
						margin: 0;
						padding-top: 10px;
					}
				`}</style>
				<h2>{this.state.recipe && html(this.state.recipe.title)}</h2>
				{subtitle}
	      {ingredients}
	      {directions}
			</div>
		);
	}
};
