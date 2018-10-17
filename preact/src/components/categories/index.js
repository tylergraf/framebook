import { h, Component } from 'preact';
import { Link } from 'preact-router';
import CookbookService from 'cookbook-service/service-es5.js';


const service = window.CookbookService;

export default class Categories extends Component {

	componentDidMount(){
		service.categories()
			.then(categories=>{
				this.setState({categories})
			});

	}

	render(){
		let things = false;
		return (
			<div>
				<ul style={{listStyle: 'none'}}>
					{this.state.categories && this.state.categories.map((category) =>
						<li>
							<Link href={`/category/${category._id}`}>{category.name}</Link>
						</li>
					)}
				</ul>
			</div>
		);
	}
};
