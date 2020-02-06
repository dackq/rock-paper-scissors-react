import React from "react";

import ChoiceButton from "./ChoiceButton/ChoiceButton";
import TriangleBackdrop from "./TriangleBackdrop/TriangleBackdrop";

import scissors from "../../images/icon-scissors.svg";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";

import "./Choices.css";

class Choices extends React.Component {
	state = {
		choices: {
			paper: paper,
			scissors: scissors,
			rock: rock
		}
	};

	handleChoice = choice => {
		console.log(choice);
		this.props.increaseScore();
	};

	render() {
		const choices = Object.keys(this.state.choices).map(choice => {
			return (
				<ChoiceButton type={choice} key={choice}>
					<img src={this.state.choices[choice]} alt="choice" />
				</ChoiceButton>
			);
		});

		return (
			<div className="Choices">
				{choices}
				<TriangleBackdrop />
			</div>
		);
	}
}

export default Choices;
