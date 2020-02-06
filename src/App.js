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
