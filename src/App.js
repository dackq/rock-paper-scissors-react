import React from "react";
import "./App.css";

import Title from "./components/Title/Title";

class App extends React.Component {
	state = {
		score: null
	};

	constructor(props) {
		super(props);
		this.state.score = 0;
	}

	resetScore() {
		this.setState({
			score: 0
		});
	}

	increaseScore() {
		let score = this.state.score + 1;
		this.setState({
			score
		});
	}

	render() {
		return (
			<div className="App">
				<header>
					<Title score={this.state.score} />
				</header>
				<div>Choices</div>
				<div>Rules</div>
			</div>
		);
	}
}

export default App;
