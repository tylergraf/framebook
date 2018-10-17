import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1><Link href="/">Preact Cookbook</Link></h1>
				<nav>
					<Link href="/all">All</Link>
				</nav>
			</header>
		);
	}
}
