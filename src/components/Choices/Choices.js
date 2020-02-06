import React from "react";

import ChoiceButton from "./ChoiceButton/ChoiceButton";
import TriangleBackdrop from "./TriangleBackdrop/TriangleBackdrop";

import scissors from "../../images/icon-scissors.svg";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";

import "./Choices.css";

let clickEnabled = true;

class Choices extends React.Component {
	state = {
		choices: {
			paper: {
				type: "paper",
				position: "paper",
				visibility: true,
				icon: paper
			},
			scissors: {
				type: "scissors",
				position: "scissors",
				visibility: true,
				icon: scissors
			},
			rock: {
				type: "rock",
				position: "rock",
				visibility: true,
				icon: rock
			}
		},
		triangleVisibility: true
	};

	handleChoice = playerChoice => {
		if (clickEnabled) {
			clickEnabled = false;
			this.centerChoices(playerChoice);
			setTimeout(() => {
				this.props.increaseScore();
				clickEnabled = true;
			}, 2000);
		}
	};

	centerChoices = playerChoice => {
		let choices = { ...this.state.choices };
		for (let choice in choices) {
			choices[choice].visibility = false;
			choices[choice].position = "center";
		}
		choices[playerChoice].visibility = true;
		choices[playerChoice].position = "focus";
		this.setState({
			choices,
			triangleVisibility: false
		});
	};

	render() {
		const choices = Object.keys(this.state.choices).map(choice => {
			return (
				<ChoiceButton
					key={choice}
					configuration={this.state.choices[choice]}
					clickHandler={this.handleChoice}
				/>
			);
		});

		return (
			<div className="Choices">
				{choices}
				<TriangleBackdrop visible={this.state.triangleVisibility} />
			</div>
		);
	}
}

export default Choices;
