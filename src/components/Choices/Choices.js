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
				position: "left",
				visibility: true,
				icon: paper
			},
			scissors: {
				type: "scissors",
				position: "right",
				visibility: true,
				icon: scissors
			},
			rock: {
				type: "rock",
				position: "bottom",
				visibility: true,
				icon: rock
			}
		},
		houseChoice: {
			type: null,
			position: "right",
			visibility: false,
			icon: null
		},
		triangleVisibility: true
	};

	/**
	 *  Runs the game after player has made a choice. Centers buttons, reveals house choice, judges winner of the game
	 *
	 *  @param {string} playerChoice
	 */
	handleChoice = playerChoice => {
		if (clickEnabled) {
			clickEnabled = false;
			const houseChoice = this.makeHouseChoice();
			this.centerChoices(playerChoice);
			setTimeout(() => {
				this.revealHouseChoice(houseChoice);
				setTimeout(() => {
					this.resetChoices();
				}, 1000);
			}, 2000);
		}
	};

	/**
	 *  Modifies state to change CSS classes in ChoiceButton component to center all choices on the left position. Hides all choices except for player choice.
	 *
	 *  @param {string} playerChoice
	 */
	centerChoices = playerChoice => {
		let choices = { ...this.state.choices };
		for (let choice in choices) {
			choices[choice].visibility = false;
			choices[choice].position = "left";
		}
		choices[playerChoice].visibility = true;
		choices[playerChoice].position = "focus";
		this.setState({
			choices,
			triangleVisibility: false
		});
	};

	/**
	 *  Chooses a random value (rock, paper, or scissors) for the house choice.
	 *
	 * @return {string} The house's choice.
	 */
	makeHouseChoice = () => {
		const choices = Object.keys(this.state.choices);
		const choice = choices[Math.floor(Math.random() * choices.length)];
		return choice;
	};

	/**
	 * Reveals the house's choice.
	 */
	revealHouseChoice = houseChoice => {
		const icon = this.state.choices[houseChoice].icon;
		this.setState({
			houseChoice: {
				type: houseChoice,
				position: "right",
				visibility: true,
				icon
			}
		});
	};

	resetChoices = () => {
		const choices = { ...this.state.choices };
		const basePositions = {
			paper: "left",
			scissors: "right",
			rock: "bottom"
		};
		for (let choice in choices) {
			choices[choice].visibility = true;
			choices[choice].position = basePositions[choice];
		}
		const houseChoice = { ...this.state.houseChoice };
		houseChoice.visibility = false;

		this.setState({
			choices,
			houseChoice
		});
		setTimeout(() => {
			this.setState({
				triangleVisibility: true
			});
			clickEnabled = true;
		}, 300);
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
				<div className="house__placeholder">
					<div className="house__placeholder-inner-circle"></div>
					<ChoiceButton configuration={this.state.houseChoice} />
				</div>
				<TriangleBackdrop visible={this.state.triangleVisibility} />
				<div>outcome</div>
			</div>
		);
	}
}

export default Choices;
