import React from "react";
import "./App.css";

import Title from "./components/Title/Title";
import Rules from "./components/Rules/Rules";

class App extends React.Component {
	state = {
		score: 0,
		rulesModalVisibility: "Rules_hidden"
	};

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
				<Rules modalVisibility={this.state.rulesModalVisibility} />
			</div>
		);
	}
}

export default App;
