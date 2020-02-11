import React from "react";

import ChoiceButton from "./ChoiceButton/ChoiceButton";
import TriangleBackdrop from "./TriangleBackdrop/TriangleBackdrop";
import Outcome from "../Outcome/Outcome";
import Labels from "./Labels/Labels";

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
		gameResult: "NULL",
		labelVisibility: false,
		outcomeVisibility: false,
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
					this.judgeWinner(houseChoice, playerChoice);
					this.setState({
						outcomeVisibility: true
					});
				}, 500);
			}, 1500);
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
			triangleVisibility: false,
			labelVisibility: true
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
	 *
	 * @param {string} houseChoice The house's choice.
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

	/**
	 * Judges the winner and returns the outcome.
	 */
	judgeWinner(houseChoice, playerChoice) {
		const values = {
			paper: 0,
			scissors: 1,
			rock: 2
		};

		const difference = values[playerChoice] - values[houseChoice];

		let outcome = "";

		if ((difference > 0 && difference !== 2) || difference === -2) {
			this.props.increaseScore();
			outcome = "YOU WIN";
		} else if (difference === 0) {
			outcome = "DRAW";
		} else {
			outcome = "YOU LOSE";
		}

		this.setState({
			gameResult: outcome
		});
	}

	resetChoices = () => {
		const houseChoice = { ...this.state.houseChoice };
		houseChoice.visibility = false;
		this.setState({
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
			houseChoice,
			labelVisibility: false,
			outcomeVisibility: false
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
			<React.Fragment>
				<div className="Choices">
					{choices}
					<div className="house__placeholder">
						<div className="house__placeholder-inner-circle"></div>
						<ChoiceButton configuration={this.state.houseChoice} />
					</div>
					<TriangleBackdrop visible={this.state.triangleVisibility} />
					<Labels labelVisibility={this.state.labelVisibility} />
				</div>
				<Outcome
					reset={this.resetChoices}
					visibility={this.state.outcomeVisibility}
					outcome={this.state.gameResult}
				/>
			</React.Fragment>
		);
	}
}

export default Choices;
