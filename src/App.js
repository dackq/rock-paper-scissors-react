import React from "react";
import "./App.css";

import Title from "./components/Title/Title";
import Rules from "./components/Rules/Rules";
import Choices from "./components/Choices/Choices";

class App extends React.Component {
	state = {
		score: 0,
		rulesModalVisibile: false
	};

	resetScore = () => {
		this.setState({
			score: 0
		});
	};

	increaseScore = () => {
		let score = this.state.score + 1;
		this.setState({
			score
		});
	};

	setRulesModalVisibility = isModalVisible => {
		this.setState({ rulesModalVisibile: isModalVisible });
	};

	render() {
		return (
			<div className="App">
				<header>
					<Title score={this.state.score} />
				</header>
				<main>
					<Choices increaseScore={this.increaseScore} />
					<Rules
						modalVisible={this.state.rulesModalVisibile}
						setModalVisibility={this.setRulesModalVisibility}
					/>
					<button
						className="Rules__button Rules__open"
						onClick={() =>
							this.setRulesModalVisibility(
								!this.state.rulesModalVisibile
							)
						}
					>
						RULES
					</button>
				</main>
			</div>
		);
	}
}

export default App;
