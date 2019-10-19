import React, {Component} from 'react';
import './App.scss';
import Card from './components/Card';
import Title from './components/Title';
import PostsData from './db';
class App extends Component {

	state = {
		posts: {}
	}

	componentDidMount () {
		this.setState({posts: PostsData})
	}

	render () {
		return (
			<main>
				<header className="app-header">	</header>
				<Title />
				<div className="app-card-list">
					{Object.keys(this.state.posts).map(key => <Card key={key} index={key} details={this.state.posts[key]} />)}
				</div>
			</main>
		);
	}
}

export default App;
