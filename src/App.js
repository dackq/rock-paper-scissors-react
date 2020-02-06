import React from "react";
import "./App.css";

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
					<div>Title</div> <div>Choices</div>
					<div>Rules</div>
				</header>
			</div>
		);
	}
}

export default App;
