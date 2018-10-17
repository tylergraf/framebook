import { h, Component } from 'preact';
import { Link } from 'preact-router';
import CookbookService from 'cookbook-service/service.js';
import style from './style.less';

const service = window.CookbookService;

export default class Subcategories extends Component {
	constructor(props){
		super(props);

		service.subcategories(props.id)
			.then(subcategories=>{
				this.setState({subcategories})
			});
	}

	render(){
		return (
			<div class={style.home}>
				<ul>
					{this.state.subcategories && this.state.subcategories.map((subcategory) =>
						<li><Link href={`/subcategory/${subcategory._id}`}>{subcategory.name}</Link></li>
					)}
				</ul>
			</div>
		);
	}
};
